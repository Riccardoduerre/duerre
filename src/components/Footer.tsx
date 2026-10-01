import { useLocale } from '../i18n/LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  const rights = t('footer_rights').replace('{{year}}', String(new Date().getFullYear()));

  return (
    <footer className="border-t border-theme-border bg-theme-surface py-12 text-theme-muted">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <p className="text-sm">{rights}</p>
        <p className="mt-3 text-sm">{t('footer_stack')}</p>
      </div>
    </footer>
  );
}
