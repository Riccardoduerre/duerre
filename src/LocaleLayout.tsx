import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LocaleProvider, useLocale } from './i18n/LocaleContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function LocalizedLayout() {
  const { locale, t } = useLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    const titleKey = pathname === '/about'
      ? 'about_title'
      : pathname === '/portfolio' || pathname.startsWith('/portfolio/')
        ? 'portfolio_heading'
        : pathname === '/blog' || pathname.startsWith('/blog/')
          ? 'blog'
          : pathname === '/contact'
            ? 'contact'
            : pathname === '/digital-marketing'
              ? 'dm_title'
              : pathname === '/photo'
                ? 'service_1_title'
                : pathname === '/video'
                  ? 'service_2_title'
                  : pathname === '/3d'
                    ? 'service_3_title'
                    : 'home_title';
    const title = t(titleKey);
    const pageTitle = titleKey === 'home_title' ? title : `${title} | Duerre Media`;

    document.title = pageTitle;
    document.documentElement.lang = locale;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('site_description'));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t('site_description'));
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'it' ? 'it_IT' : 'en_US');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', t('site_description'));
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
