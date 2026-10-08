import { LocaleProvider } from '../i18n/LocaleContext';

export default function ViewWrapper({ lang, children }: { lang: 'en' | 'it'; children: React.ReactNode }) {
  return (
    <LocaleProvider initialLocale={lang}>
      {children}
    </LocaleProvider>
  );
}
