import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { translations } from '../i18n/index';
import { LocaleProvider } from '../i18n/LocaleContext';

interface NavbarProps {
  lang: 'en' | 'it';
  currentPath: string;
}

export default function Navbar({ lang, currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  const t = (key: keyof typeof translations.en) => {
    return translations[lang]?.[key] || key;
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const getLocalizedPath = (path: string) => {
    return `${base}/${lang}${path === '' ? '' : `/${path}`}`;
  };

  const isItemActive = (path: string) => {
    const targetPath = getLocalizedPath(path);
    if (targetPath === `${base}/${lang}` || targetPath === `${base}/${lang}/`) {
      return currentPath === targetPath || currentPath === `${base}/${lang}`;
    }
    return currentPath.startsWith(targetPath);
  };

  const changeLocalePath = () => {
    const newLang = lang === 'en' ? 'it' : 'en';
    // currentPath might or might not include base when matched, but we can just use Astro's current url.
    // simpler: just strip base if present, replace lang, add base back
    let pathWithoutBase = currentPath;
    if (base && pathWithoutBase.startsWith(base)) {
      pathWithoutBase = pathWithoutBase.substring(base.length);
    }
    const newPath = pathWithoutBase.replace(/^\/(en|it)/, `/${newLang}`);
    return `${base}${newPath || `/${newLang}`}`;
  };

  const items = [
    { key: 'portfolio', path: 'portfolio', label: t('portfolio') },
    { key: 'about', path: 'about', label: t('about') },
    { key: 'contact', path: 'contact', label: t('contact') },
    { key: 'blog', path: 'blog', label: t('blog') },
  ];

  useEffect(() => {
    const checkDarkBackdrop = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const x = headerRect.left + headerRect.width / 2;
      const y = headerRect.bottom - 10;

      try {
        const elements = document.elementsFromPoint(x, y);
        for (const el of elements) {
          if (el !== header && !header.contains(el)) {
            if (
              el.tagName === 'IMG' ||
              el.closest('img') ||
              el.closest('[data-navbar-theme="dark"]')
            ) {
              setIsOverDark(true);
              return;
            }

            if (
              el.tagName === 'SECTION' ||
              el.tagName === 'ARTICLE' ||
              el.tagName === 'MAIN' ||
              el.tagName === 'DIV'
            ) {
              const bg = window.getComputedStyle(el).backgroundColor;
              const rgbMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (rgbMatch) {
                const [, r, g, b] = rgbMatch.map(Number);
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                if (luminance < 0.35) {
                  setIsOverDark(true);
                  return;
                }
                if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
                  break;
                }
              }
            }
          }
        }
      } catch {}

      setIsOverDark(false);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkDarkBackdrop();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkDarkBackdrop();
    const rafId = window.requestAnimationFrame(checkDarkBackdrop);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentPath]);

  const activeOverDark = isOverDark && !mobileOpen;

  return (
    <LocaleProvider initialLocale={lang}>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        activeOverDark
          ? 'bg-black/25 backdrop-blur-md text-white shadow-lg shadow-black/10'
          : 'bg-theme-bg/90 backdrop-blur-xl text-theme-text'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <a
          href={`${base}/${lang}`}
          className="group flex flex-col"
          onClick={() => setMobileOpen(false)}
        >
          <span
            className={`text-lg font-black tracking-[0.32em] transition ${
              activeOverDark
                ? 'text-white group-hover:text-white/80'
                : 'text-theme-text group-hover:text-theme-mad'
            }`}
          >
            DUERRE
          </span>
          <span
            className={`text-[9px] font-medium tracking-[0.28em] transition ${
              activeOverDark ? 'text-white/70' : 'text-theme-muted'
            }`}
          >
            RICCARDO RIVA
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const active = isItemActive(item.path);
            return (
              <a
                key={item.key}
                href={getLocalizedPath(item.path)}
                className={`relative text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                  activeOverDark
                    ? active
                      ? 'text-white after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : 'text-white/85 hover:text-white'
                    : active
                    ? 'text-theme-accent after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-theme-accent'
                    : 'text-theme-text hover:text-theme-mad'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div
            className={`flex items-center gap-3 border-l pl-6 transition-colors ${
              activeOverDark ? 'border-white/20' : 'border-theme-border'
            }`}
          >
            <ThemeToggle
              className={
                activeOverDark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-theme-border text-theme-text hover:bg-theme-surface'
              }
            />
            <a
              href={changeLocalePath()}
              className={`rounded-full border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad ${
                activeOverDark
                  ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                  : 'border-theme-border text-theme-text hover:border-theme-mad hover:text-theme-mad'
              }`}
            >
              {lang === 'en' ? 'IT' : 'EN'}
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] transition md:hidden ${
            activeOverDark
              ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
              : 'border-theme-border text-theme-text hover:border-theme-mad hover:text-theme-mad'
          }`}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span>{mobileOpen ? t('menu_close_label') : t('menu_label')}</span>
          <span className="text-xs">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`${
          mobileOpen ? 'visible max-h-[640px] border-t border-theme-border' : 'invisible max-h-0'
        } overflow-hidden bg-theme-bg/95 backdrop-blur-2xl transition-all duration-300 md:hidden`}
      >
        <div className="container mx-auto space-y-6 px-6 py-8">
          <div className="space-y-4 border-b border-theme-border pb-6">
            {items.map((item) => {
              const active = isItemActive(item.path);
              return (
                <a
                  key={item.key}
                  href={getLocalizedPath(item.path)}
                  className={`block text-lg font-bold uppercase tracking-[0.24em] transition-colors hover:text-theme-mad ${
                    active ? 'text-theme-accent' : 'text-theme-text'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href={changeLocalePath()}
                className="rounded-full border border-theme-border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.2em]"
              >
                {lang === 'en' ? 'IT' : 'EN'}
              </a>
            </div>
            <a
              href={`mailto:${t('contact_email_value')}`}
              className="text-xs font-semibold tracking-wider text-theme-muted hover:text-theme-mad"
            >
              {t('contact_email_value')}
            </a>
          </div>
        </div>
      </div>
    </header>
    </LocaleProvider>
  );
}
