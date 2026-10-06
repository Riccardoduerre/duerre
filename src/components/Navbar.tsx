import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'portfolio', path: 'portfolio' },
  { key: 'marketing_nav', path: 'digital-marketing' },
  { key: 'about', path: 'about' },
  { key: 'blog', path: 'blog' },
  { key: 'contact', path: 'contact' },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocale = locale;
  const langLabel = currentLocale === 'en' ? 'IT' : 'EN';
  const langAriaLabel = currentLocale === 'en' ? 'Passa alla lingua italiana' : 'Switch to English language';

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const items = useMemo(
    () => navItems.map((item) => ({ ...item, label: t(item.key) })),
    [t],
  );

  const isItemActive = (itemPath: string) => {
    const currentPath = location.pathname.replace(/\/+$/, '') || '/';
    if (itemPath === 'portfolio') {
      return (
        currentPath === '/portfolio' ||
        currentPath.startsWith('/portfolio/') ||
        currentPath === '/photo' ||
        currentPath === '/video' ||
        currentPath === '/3d'
      );
    }
    if (itemPath === 'blog') {
      return currentPath === '/blog' || currentPath.startsWith('/blog/');
    }
    return currentPath === `/${itemPath}`;
  };

  const changeLocale = (newLocale: 'en' | 'it') => {
    if (newLocale === currentLocale) return;
    setLocale(newLocale);
    navigate({ pathname: location.pathname, search: `?lang=${newLocale}` }, { replace: true });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-theme-border/80 bg-theme-bg/85 backdrop-blur-xl shadow-theme transition-all">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className="group flex flex-col"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-lg font-black tracking-[0.32em] text-theme-text transition group-hover:text-theme-mad">
              DUERRE
            </span>
            <span className="text-[9px] font-medium tracking-[0.28em] text-theme-muted">
              RICCARDO RIVA
            </span>
          </NavLink>

          {/* Live Studio Availability Badge (Desktop) */}
          <div className="hidden items-center gap-2 rounded-full border border-theme-border bg-theme-surface/70 px-3 py-1 text-[10px] font-medium tracking-wider text-theme-muted xl:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{t('studio_available')}</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const active = isItemActive(item.path);
            return (
              <NavLink
                key={item.key}
                to={`/${item.path}`}
                className={`relative text-xs font-semibold uppercase tracking-[0.24em] transition-all hover:text-theme-mad ${
                  active
                    ? 'text-theme-accent after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-theme-accent'
                    : 'text-theme-text'
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
          <div className="flex items-center gap-3 border-l border-theme-border pl-6">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-full border border-theme-border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:border-theme-mad hover:text-theme-mad focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
              onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
              aria-label={langAriaLabel}
            >
              {langLabel}
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-theme-border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition hover:border-theme-mad hover:text-theme-mad md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? t('menu_close') : t('menu_open')}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span>{mobileOpen ? t('menu_close_label') : t('menu_label')}</span>
          <span className="text-xs">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Editorial Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`${
          mobileOpen ? 'visible max-h-[640px] border-t border-theme-border' : 'invisible max-h-0'
        } overflow-hidden bg-theme-bg/95 backdrop-blur-2xl transition-all duration-300 md:hidden`}
      >
        <div className="container mx-auto space-y-6 px-6 py-8">
          <div className="flex items-center gap-2 rounded-full border border-theme-border bg-theme-surface/70 px-3.5 py-1.5 text-[10px] font-medium tracking-wider text-theme-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{t('studio_available')}</span>
          </div>

          <div className="space-y-4 border-b border-theme-border pb-6">
            {items.map((item) => {
              const active = isItemActive(item.path);
              return (
                <NavLink
                  key={item.key}
                  to={`/${item.path}`}
                  className={`block text-lg font-bold uppercase tracking-[0.24em] transition-colors hover:text-theme-mad ${
                    active ? 'text-theme-accent' : 'text-theme-text'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="rounded-full border border-theme-border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
                aria-label={langAriaLabel}
              >
                {langLabel}
              </button>
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
  );
}
