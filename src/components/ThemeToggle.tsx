import { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'light';
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // Use system preference when browser storage is unavailable.
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const { t } = useLocale();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // If there is a manually saved preference, do not override it.
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggle = () => {
    setTheme((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', newTheme);
      } catch {}
      return newTheme;
    });
  };

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const ariaLabel = theme === 'dark' ? t('theme_switch_to_light') : t('theme_switch_to_dark');

  return (
    <button
      type="button"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad ${
        className || 'border-theme-border text-theme-text hover:bg-theme-surface'
      }`}
      onClick={handleToggle}
      aria-label={ariaLabel}
    >
      {nextTheme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314l1.414 1.414M16.95 16.95l1.414 1.414"
          />
        </svg>
      )}
    </button>
  );
}
