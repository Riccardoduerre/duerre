import { useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { key: 'portfolio', path: 'portfolio' },
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

  const items = useMemo(
    () => navItems.map((item) => ({ ...item, label: t(item.key) })),
    [t],
  );

  const changeLocale = (newLocale: 'en' | 'it') => {
    if (newLocale === currentLocale) return;
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      navigate(`/${newLocale}`);
      setLocale(newLocale);
      return;
    }
    segments[0] = newLocale;
    navigate(`/${segments.join('/')}`);
    setLocale(newLocale);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-theme-border bg-theme-bg/90 backdrop-blur-md shadow-lg shadow-theme/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <NavLink
          to={`/${currentLocale}`}
          className="text-lg font-bold uppercase tracking-[0.35em] text-theme-text"
        >
          Duerre
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`/${currentLocale}/${item.path}`}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.28em] transition-colors hover:text-theme-accent ${
                  isActive ? 'text-theme-accent' : 'text-theme-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-theme-border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition hover:border-theme-accent hover:text-theme-accent"
            onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
          >
            {langLabel}
          </button>
        </nav>

        <button
          type="button"
          className="rounded-full border border-theme-border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] md:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <div className={`${mobileOpen ? 'max-h-[520px] border-t border-theme-border' : 'max-h-0'} overflow-hidden bg-theme-bg transition-all duration-300 md:hidden`}>
        <div className="container mx-auto space-y-5 px-6 py-6">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`/${currentLocale}/${item.path}`}
              className="block text-base font-semibold uppercase tracking-[0.26em] text-theme-text hover:text-theme-accent"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center justify-between gap-4 pt-2">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-full border border-theme-border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
              onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
            >
              {langLabel}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
