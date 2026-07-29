import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const preferred = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
    document.documentElement.classList.toggle('dark', preferred === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-theme-border text-theme-text transition hover:bg-theme-surface"
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m0-11.314l1.414 1.414M16.95 16.95l1.414 1.414"
          />
        </svg>
      )}
    </button>
  );
}
