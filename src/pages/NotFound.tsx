import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="flex min-h-[55vh] items-center bg-theme-bg py-16">
      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-theme-accent">404</p>
        <h1 className="mt-4 break-words text-3xl font-bold uppercase leading-tight tracking-[0.08em] sm:text-5xl">
          {t('page_not_found')}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-theme-muted sm:text-lg">
          {t('page_not_found_desc')}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center border-b border-theme-accent text-sm font-semibold text-theme-text transition hover:border-theme-mad hover:text-theme-mad"
        >
          {t('page_not_found_home')} <span aria-hidden="true" className="ml-3">→</span>
        </Link>
      </div>
    </section>
  );
}