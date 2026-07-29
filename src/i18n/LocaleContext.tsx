import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, getTranslation } from './index';

interface LocaleContextValue {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale: initialLocale, children }: { locale: Locale; children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

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
