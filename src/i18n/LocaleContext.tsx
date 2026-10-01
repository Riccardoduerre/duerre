import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Locale, getPreferredLocale, getTranslation } from './index';

interface LocaleContextValue {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getPreferredLocale());
  const location = useLocation();

  useEffect(() => {
    try {
      localStorage.setItem('lang', locale);
    } catch {
      // URL and in-memory locale still work when storage is unavailable.
    }
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const urlLocale = new URLSearchParams(location.search).get('lang');
    if ((urlLocale === 'en' || urlLocale === 'it') && urlLocale !== locale) {
      setLocaleState(urlLocale);
    }
  }, [locale, location.search]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      localStorage.setItem('lang', nextLocale);
    } catch {
      // Keep the selected locale for this session when storage is unavailable.
    }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLocale);
    window.history.replaceState(window.history.state, '', url);
  };

  const contextValue = useMemo(
    () => ({
      locale,
      t: (key: string) => getTranslation(key, locale),
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
