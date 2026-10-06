import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  const [milanTime, setMilanTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Rome',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setMilanTime(formatted);
      } catch {
        setMilanTime('');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const rights = t('footer_rights').replace('{{year}}', String(new Date().getFullYear()));

  return (
    <footer className="border-t border-theme-border bg-theme-surface text-theme-muted">
      {/* Editorial Invitation Banner */}
      <div className="border-b border-theme-border py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-theme-accent">
              Riccardo Riva — Visual Direction
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[0.06em] text-theme-text sm:text-4xl md:text-5xl">
              {t('footer_cta_title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-theme-muted sm:text-lg">
              {t('footer_cta_desc')}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
          >
            {t('contact')} <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>

      {/* Studio Info & Navigation Grid */}
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-theme-text">
            Duerre Media
          </span>
          <p className="mt-3 text-xs leading-relaxed text-theme-muted">
            Commercial Photography, Cinema, 3D Worlds & Digital Strategy.
          </p>
          {milanTime && (
            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-theme-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{milanTime} CET · Milan, Italy</span>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-theme-text">
            {t('portfolio')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs tracking-wider">
            <li>
              <Link to="/photo" className="transition hover:text-theme-mad">
                {t('service_1_title')}
              </Link>
            </li>
            <li>
              <Link to="/video" className="transition hover:text-theme-mad">
                {t('service_2_title')}
              </Link>
            </li>
            <li>
              <Link to="/3d" className="transition hover:text-theme-mad">
                {t('service_3_title')}
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing" className="transition hover:text-theme-mad">
                {t('marketing_nav')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-theme-text">
            {t('about')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs tracking-wider">
            <li>
              <Link to="/about" className="transition hover:text-theme-mad">
                {t('about_title')}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="transition hover:text-theme-mad">
                {t('blog')}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="transition hover:text-theme-mad">
                {t('privacy_title')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-theme-text">
            {t('contact')}
          </h3>
          <div className="mt-4 space-y-2 text-xs tracking-wider">
            <a
              href={`mailto:${t('contact_email_value')}`}
              className="block font-medium text-theme-text underline decoration-theme-border underline-offset-4 transition hover:text-theme-mad hover:decoration-theme-mad"
            >
              {t('contact_email_value')}
            </a>
            <p className="text-theme-muted">{t('contact_location_value')}</p>
          </div>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="border-t border-theme-border/70 py-8 text-xs text-theme-muted">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left md:px-8">
          <p>{rights}</p>
          <p>{t('footer_stack')}</p>
        </div>
      </div>
    </footer>
  );
}

