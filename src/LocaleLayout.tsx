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
    const routeMeta: Record<string, [string, string]> = {
      '/': ['home_title', 'seo_home'],
      '/portfolio': ['portfolio_heading', 'seo_portfolio'],
      '/about': ['about_title', 'seo_about'],
      '/blog': ['blog', 'seo_blog'],
      '/contact': ['contact', 'seo_contact'],
      '/digital-marketing': ['dm_title', 'seo_marketing'],
      '/photo': ['service_1_title', 'seo_photo'],
      '/video': ['service_2_title', 'seo_video'],
      '/3d': ['service_3_title', 'seo_3d'],
      '/privacy': ['privacy_title', 'seo_privacy'],
    };
    const projectId = pathname.startsWith('/portfolio/') && pathname !== '/portfolio/archive'
      ? pathname.slice('/portfolio/'.length)
      : '';
    const project = portfolioProjects.find((item) => item.id === projectId);
    const blogSlug = pathname.startsWith('/blog/') ? pathname.slice('/blog/'.length) : '';
    const post = posts.find((item) => item.slug === blogSlug);
    const [titleKey, descriptionKey] = routeMeta[pathname] ?? ['portfolio_heading', 'seo_portfolio'];
    const title = project?.title[locale] ?? post?.title[locale] ?? t(titleKey);
    const pageTitle = pathname === '/' ? title : `${title} | Duerre Media`;
    const description = project?.challenge[locale] ?? post?.excerpt[locale] ?? t(descriptionKey);
    const socialImage = project?.image ?? post?.image;

    document.title = pageTitle;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'it' ? 'it_IT' : 'en_US');
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', post ? 'article' : 'website');
    if (socialImage) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', new URL(socialImage, window.location.origin).href);
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', new URL(socialImage, window.location.origin).href);
    }
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [locale, pathname, t]);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text">
      <Navbar />
      <main className="pt-24">
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
