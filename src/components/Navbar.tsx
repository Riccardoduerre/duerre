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
    <header className="fixed inset-x-0 top-0 z-50 bg-theme-bg/95 shadow-xl backdrop-blur-md border-b border-theme-border transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-5 md:px-8">
        <NavLink to={`/${currentLocale}`} className="text-xl font-bold uppercase tracking-[0.3em]">
          Duerre
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`/${currentLocale}/${item.path}`}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-indigo-500 ${
                  isActive ? 'text-indigo-500' : 'text-theme-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <button
            type="button"
            className="rounded-sm border border-theme-border px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-indigo-500"
            onClick={() => changeLocale(currentLocale === 'en' ? 'it' : 'en')}
          >
            {langLabel}
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-sm border border-theme-border px-3 py-2 text-xs uppercase tracking-[0.2em]"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <div className={`${mobileOpen ? 'max-h-[500px] border-t border-theme-border' : 'max-h-0'} overflow-hidden bg-theme-bg transition-all duration-300 md:hidden`}>
        <div className="container mx-auto px-6 py-6 space-y-5">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`/${currentLocale}/${item.path}`}
              className="block text-lg font-semibold uppercase tracking-[0.2em] text-theme-text hover:text-indigo-500"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center justify-between gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-sm border border-theme-border px-3 py-2 text-xs uppercase tracking-[0.2em]"
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
