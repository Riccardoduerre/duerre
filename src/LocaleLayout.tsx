import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LocaleProvider, useLocale } from './i18n/LocaleContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { portfolioProjects } from './data/portfolio';
import posts from './data/posts';

function LocalizedLayout() {
  const { locale, t } = useLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const browserUrl = new URL(window.location.href);
    if (browserUrl.searchParams.get('lang') !== locale) {
      browserUrl.searchParams.set('lang', locale);
      window.history.replaceState(window.history.state, '', browserUrl);
    }
    const routeMeta: Record<string, [string, string]> = {
      '/': ['home_title', 'seo_home'],
      '/portfolio': ['portfolio_heading', 'seo_portfolio'],
      '/about': ['about_title', 'seo_about'],
      '/blog': ['blog_title', 'seo_blog'],
      '/contact': ['contact', 'seo_contact'],
      '/digital-marketing': ['dm_title', 'seo_marketing'],
      '/photo': ['service_1_title', 'seo_photo'],
      '/video': ['service_2_title', 'seo_video'],
      '/3d': ['service_3_title', 'seo_3d'],
      '/privacy': ['privacy_title', 'seo_privacy'],
    };
    const projectId = normalizedPath.startsWith('/portfolio/')
      ? normalizedPath.slice('/portfolio/'.length)
      : '';
    const project = normalizedPath === '/portfolio' ? undefined : portfolioProjects.find((item) => item.id === projectId);
    const blogSlug = normalizedPath.startsWith('/blog/') ? normalizedPath.slice('/blog/'.length) : '';
    const post = posts.find((item) => item.slug === blogSlug);
    const [titleKey, descriptionKey] = routeMeta[normalizedPath] ?? ['page_not_found', 'page_not_found_desc'];
    const title = project?.title[locale] ?? post?.title[locale] ?? t(titleKey);
    const pageTitle = normalizedPath === '/' ? title : `${title} | Duerre Media`;
    const description = project?.challenge[locale] ?? post?.excerpt[locale] ?? t(descriptionKey);
    const socialImage = project?.image ?? post?.image;
    const canonicalUrl = new URL(normalizedPath === '/' ? '/' : `${normalizedPath}/`, window.location.origin);
    canonicalUrl.searchParams.set('lang', locale);

    document.title = pageTitle;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'it' ? 'it_IT' : 'en_US');
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', post ? 'article' : 'website');
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl.href);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', canonicalUrl.href);
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute('href', canonicalUrl.href);

    for (const language of ['en', 'it'] as const) {
      const alternateUrl = new URL(canonicalUrl);
      alternateUrl.searchParams.set('lang', language);
      let alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${language}"]`);
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.rel = 'alternate';
        alternate.hreflang = language;
        document.head.append(alternate);
      }
      alternate.href = alternateUrl.href;
    }

    const defaultUrl = new URL(normalizedPath === '/' ? '/' : `${normalizedPath}/`, window.location.origin);
    defaultUrl.searchParams.set('lang', 'it');
    const defaultAlternate = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    defaultAlternate?.setAttribute('href', defaultUrl.href);

    const socialImageUrl = socialImage
      ? new URL(socialImage, window.location.origin).href
      : new URL('/og-image.webp', window.location.origin).href;
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', socialImageUrl);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', socialImageUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [locale, pathname, t]);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-theme-surface focus:px-4 focus:py-3 focus:text-theme-text focus:shadow-theme"
      >
        {t('skip_to_content')}
      </a>
      <Navbar />
      <main id="main-content" className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function LocaleLayout() {
  return (
    <LocaleProvider>
      <LocalizedLayout />
    </LocaleProvider>
  );
}
