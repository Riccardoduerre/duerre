import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="flex min-h-[60vh] items-center bg-theme-bg pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="container mx-auto max-w-4xl px-6 md:px-8 text-center sm:text-left">
        <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.3em] text-theme-accent">
          Error 404
        </span>
        <h1 className="mt-4 break-words text-4xl font-black uppercase leading-tight tracking-[0.1em] sm:text-6xl">
          {t('page_not_found')}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">
          {t('page_not_found_desc')}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <Link
            to="/"
            className="rounded-full bg-theme-mad px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
          >
            {t('page_not_found_home')} →
          </Link>
          <Link
            to="/portfolio"
            className="rounded-full border border-theme-border bg-theme-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-theme-text transition hover:border-theme-mad"
          >
            {t('portfolio')}
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-theme-border bg-theme-surface px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-theme-text transition hover:border-theme-mad"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </section>
  );
}