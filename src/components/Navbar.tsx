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
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocale = locale;
  const langLabel = currentLocale === 'en' ? 'IT' : 'EN';
  const langAriaLabel = currentLocale === 'en' ? 'Passa alla lingua italiana' : 'Switch to English language';

  const isHome = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // When on the homepage hero, make navbar reactive to the dark background image
  const isOverDarkHero = isHome && !isScrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isOverDarkHero
          ? 'border-white/15 bg-black/25 backdrop-blur-md text-white'
          : 'border-theme-border/80 bg-theme-bg/95 backdrop-blur-xl shadow-theme text-theme-text'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <NavLink
          to="/"
          className="group flex flex-col"
          onClick={() => setMobileOpen(false)}
        >
          <span
            className={`text-lg font-black tracking-[0.32em] transition ${
              isOverDarkHero
                ? 'text-white group-hover:text-white/80'
                : 'text-theme-text group-hover:text-theme-mad'
            }`}
          >
            DUERRE
          </span>
          <span
            className={`text-[9px] font-medium tracking-[0.28em] transition ${
              isOverDarkHero ? 'text-white/70' : 'text-theme-muted'
            }`}
          >
            RICCARDO RIVA
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const active = isItemActive(item.path);
            return (
              <NavLink
                key={item.key}
                to={`/${item.path}`}
                className={`relative text-xs font-semibold uppercase tracking-[0.24em] transition-all ${
                  isOverDarkHero
                    ? active
                      ? 'text-white after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-white'
                      : 'text-white/80 hover:text-white'
                    : active
                    ? 'text-theme-accent after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-theme-accent'
                    : 'text-theme-text hover:text-theme-mad'
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
          <div
            className={`flex items-center gap-3 border-l pl-6 transition-colors ${
              isOverDarkHero ? 'border-white/20' : 'border-theme-border'
            }`}
          >
            <ThemeToggle
              className={
                isOverDarkHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-theme-border text-theme-text hover:bg-theme-surface'
              }
            />
            <button
              type="button"
              className={`rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad ${
                isOverDarkHero
                  ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
                  : 'border-theme-border text-theme-text hover:border-theme-mad hover:text-theme-mad'
              }`}
              onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
              aria-label={langAriaLabel}
            >
              {langLabel}
            </button>
          </div>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition md:hidden ${
            isOverDarkHero
              ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/10'
              : 'border-theme-border text-theme-text hover:border-theme-mad hover:text-theme-mad'
          }`}
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
