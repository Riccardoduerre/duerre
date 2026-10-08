import { access, copyFile, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');


const vite = await createServer({
  configFile: path.join(rootDir, 'vite.config.ts'),
  mode: 'production',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
});

let routes = [
  '/',
  '/about',
  '/portfolio',
  '/photo',
  '/video',
  '/3d',
  '/digital-marketing',
  '/blog',
  '/contact',
  '/privacy',
];

let portfolioProjects;
let posts;
let translations;

try {
  [{ portfolioProjects }, { default: posts }, { translations }] = await Promise.all([
    vite.ssrLoadModule('/src/data/portfolio.ts'),
    vite.ssrLoadModule('/src/data/posts.ts'),
    vite.ssrLoadModule('/src/i18n/index.ts'),
  ]);
  routes = [
    ...routes,
    ...portfolioProjects.map((project) => `/portfolio/${project.id}`),
    ...posts.map((post) => `/blog/${post.slug}`),
    ...posts.flatMap((post) => (post.aliases || []).map((alias) => `/blog/${alias}`)),
  ];
} finally {
  await vite.close();
}

routes = [...new Set(routes)];

const sourceCname = path.join(rootDir, 'CNAME');
const distCname = path.join(distDir, 'CNAME');
let siteUrl = 'https://duerremedia.com';

try {
  const domain = (await readFile(sourceCname, 'utf8')).trim();
  if (domain) siteUrl = `https://${domain}`;
} catch {
  // Use the configured production domain if no CNAME is present.
}

const localizedUrl = (route, locale) => {
  const pathname = route === '/' ? '/' : `${route}/`;
  const url = new URL(pathname, siteUrl);
  url.searchParams.set('lang', locale);
  return url.href;
};
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const routeMeta = {
  '/': ['home_title', 'seo_home'],
  '/about': ['about_title', 'seo_about'],
  '/portfolio': ['portfolio_heading', 'seo_portfolio'],
  '/photo': ['service_1_title', 'seo_photo'],
  '/video': ['service_2_title', 'seo_video'],
  '/3d': ['service_3_title', 'seo_3d'],
  '/digital-marketing': ['dm_title', 'seo_marketing'],
  '/blog': ['blog_title', 'seo_blog'],
  '/contact': ['contact', 'seo_contact'],
  '/privacy': ['privacy_title', 'seo_privacy'],
};

function updateMeta(html, attribute, name, content) {
  const matcher = new RegExp(`<meta(?=[^>]*${attribute}="${name}")[^>]*>`, 's');
  return html.replace(matcher, (tag) => tag.replace(/content="[^"]*"/, `content="${escapeHtml(content)}"`));
}

function updateLink(html, rel, relationValue, href) {
  const matcher = relationValue
    ? new RegExp(`<link(?=[^>]*rel="${rel}")(?=[^>]*hreflang="${relationValue}")[^>]*>`)
    : new RegExp(`<link(?=[^>]*rel="${rel}")[^>]*>`);
  return html.replace(matcher, (tag) => tag.replace(/href="[^"]*"/, `href="${escapeHtml(href)}"`));
}

const baseHtml = await readFile(indexFile, 'utf8');
const distAssets = await readdir(path.join(distDir, 'assets')).catch(() => []);

function resolveAssetUrl(imageRef) {
  if (!imageRef) return `${siteUrl}/og-image.webp`;
  if (imageRef.startsWith('http') && !imageRef.startsWith('file:')) return imageRef;
  const cleaned = imageRef.replace(/^file:\/\//, '');
  const parsed = path.parse(cleaned);
  const matched = distAssets.find((file) => file.startsWith(parsed.name) && file.endsWith(parsed.ext));
  if (matched) {
    return `${siteUrl}/assets/${matched}`;
  }
  return `${siteUrl}/og-image.webp`;
}

for (const route of routes) {
  const project = portfolioProjects.find((item) => `/portfolio/${item.id}` === route);
  const post = posts.find(
    (item) => `/blog/${item.slug}` === route || (item.aliases || []).some((a) => `/blog/${a}` === route)
  );
  const [titleKey, descriptionKey] = routeMeta[route] ?? ['portfolio_heading', 'seo_portfolio'];
  const title = project?.title.it ?? post?.title.it ?? translations.it[titleKey];
  const pageTitle = route === '/' ? title : `${title} | Duerre Media`;
  const description = project?.challenge.it ?? post?.excerpt.it ?? translations.it[descriptionKey];
  const canonicalUrl = localizedUrl(route, 'it');
  const englishUrl = localizedUrl(route, 'en');
  const socialImageUrl = resolveAssetUrl(project?.image ?? post?.image);

  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`);
  html = updateMeta(html, 'name', 'title', pageTitle);
  html = updateMeta(html, 'name', 'description', description);
  html = updateMeta(html, 'property', 'og:title', pageTitle);
  html = updateMeta(html, 'property', 'og:description', description);
  html = updateMeta(html, 'property', 'og:url', canonicalUrl);
  html = updateMeta(html, 'property', 'og:locale', 'it_IT');
  html = updateMeta(html, 'property', 'og:type', post ? 'article' : 'website');
  html = updateMeta(html, 'property', 'og:image', socialImageUrl);
  html = updateMeta(html, 'name', 'twitter:title', pageTitle);
  html = updateMeta(html, 'name', 'twitter:description', description);
  html = updateMeta(html, 'name', 'twitter:url', canonicalUrl);
  html = updateMeta(html, 'name', 'twitter:image', socialImageUrl);
  html = updateLink(html, 'canonical', null, canonicalUrl);
  html = updateLink(html, 'alternate', 'it', canonicalUrl);
  html = updateLink(html, 'alternate', 'en', englishUrl);
  html = updateLink(html, 'alternate', 'x-default', canonicalUrl);

  if (route !== '/') {
    const routeDirectory = path.resolve(distDir, `.${route}`);
    if (!routeDirectory.startsWith(`${distDir}${path.sep}`)) {
      throw new Error(`Invalid route path: ${route}`);
    }
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(path.join(routeDirectory, 'index.html'), html);
  } else {
    await writeFile(indexFile, html);
    await copyFile(indexFile, path.join(distDir, '404.html'));
  }
}

const sitemapEntries = routes.flatMap((route) => ['it', 'en'].map((locale) => {
  const alternates = ['it', 'en'].map((language) =>
    `<xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(localizedUrl(route, language))}" />`,
  ).join('');
  return `<url><loc>${escapeXml(localizedUrl(route, locale))}</loc>${alternates}</url>`;
}));

await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemapEntries.join('')}</urlset>\n`,
);
await writeFile(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);

try {
  await access(sourceCname, constants.R_OK);
  await copyFile(sourceCname, distCname);
  console.log('Copied CNAME to dist');
} catch {
  // No CNAME found at repo root; skip custom domain copy.
}
