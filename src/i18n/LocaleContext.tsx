import React, { createContext, useContext, useMemo } from 'react';
import { getTranslation } from './index';
type Locale = 'en' | 'it';

interface LocaleContextValue {
  locale: Locale;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale: Locale }) {
  const contextValue = useMemo(
    () => ({
      locale: initialLocale,
      t: (key: string) => getTranslation(key, initialLocale),
    }),
    [initialLocale],
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
