// Auto-generated blog posts with full Italian and English content

export type LocaleStrings = Record<'en' | 'it', string>;

export interface BlogPostData {
  slug: string;
  title: LocaleStrings;
  date: string;
  image: string;
  excerpt: LocaleStrings;
  content: LocaleStrings;
  aliases?: string[];
}

export function sortPostsByDateDesc(postList: BlogPostData[]): BlogPostData[] {
  return [...postList].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) {
      return timeB - timeA;
    }
    return b.date.localeCompare(a.date);
  });
}

const enModules = import.meta.glob('../content/blog/*/en.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;
const itModules = import.meta.glob('../content/blog/*/it.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { meta: {}, content: raw };
  const yaml = match[1];
  const content = raw.slice(match[0].length).trim();
  const meta: any = {};
  yaml.split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon > -1) {
      const key = line.slice(0, colon).trim();
      let val = line.slice(colon + 1).trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      meta[key] = val;
    }
  });
  return { meta, content };
}

const imageModules = import.meta.glob('../assets/images/optimized/*.webp', { query: '?url', eager: true }) as Record<string, { default: string }>;

const rawPosts: BlogPostData[] = Object.keys(enModules).map(enKey => {
  const slug = enKey.split('/')[3];
  const itKey = `../content/blog/${slug}/it.md`;
  
  const enRaw = enModules[enKey]?.default || '';
  const itRaw = itModules[itKey]?.default || '';
  
  const enParsed = parseFrontmatter(enRaw);
  const itParsed = parseFrontmatter(itRaw);
  
  let imageUrl = enParsed.meta.image || '';
  if (imageUrl.includes('../assets/images/optimized/')) {
    const filename = imageUrl.split('/').pop();
    const resolvedImage = imageModules[`../assets/images/optimized/${filename}`];
    if (resolvedImage) {
      imageUrl = resolvedImage.default;
    }
  }
  
  return {
    slug,
    title: { en: enParsed.meta.title || slug, it: itParsed.meta.title || slug },
    date: enParsed.meta.date || '2026-01-01',
    image: imageUrl,
    excerpt: { en: enParsed.meta.excerpt || '', it: itParsed.meta.excerpt || '' },
    content: {
      en: enParsed.content,
      it: itParsed.content
    }
  };
});

export const posts: BlogPostData[] = sortPostsByDateDesc(rawPosts);

export { formatBlogDate } from '../lib/date';

export default posts;
