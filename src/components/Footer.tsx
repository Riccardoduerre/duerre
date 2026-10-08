import { translations } from '../i18n/index';

interface FooterProps {
  lang: 'en' | 'it';
}

export default function Footer({ lang }: FooterProps) {
  const t = (key: keyof typeof translations.en) => {
    return translations[lang]?.[key] || key;
  };
  
  const getLocalizedPath = (path: string) => `/${lang}/${path}`;
  const rights = t('footer_rights').replace('{{year}}', String(new Date().getFullYear()));

  return (
    <footer className="border-t border-theme-border bg-theme-surface text-theme-muted">
      {/* Editorial Invitation Banner */}
      <div className="border-b border-theme-border py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-8">
          <div className="max-w-2xl">
            
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-theme-text sm:text-4xl md:text-5xl">
              {t('footer_cta_title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-theme-muted sm:text-lg">
              {t('footer_cta_desc')}
            </p>
          </div>
          <a
            href={getLocalizedPath('contact')}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
          >
            {t('contact')} <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Studio Info & Navigation Grid */}
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-theme-text">
            Duerre Media
          </span>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-theme-text">
            {t('portfolio')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs tracking-wider">
            <li>
              <a href={getLocalizedPath('photo')} className="transition hover:text-theme-mad">
                {t('service_1_title')}
              </a>
            </li>
            <li>
              <a href={getLocalizedPath('video')} className="transition hover:text-theme-mad">
                {t('service_2_title')}
              </a>
            </li>
            <li>
              <a href={getLocalizedPath('3d')} className="transition hover:text-theme-mad">
                {t('service_3_title')}
              </a>
            </li>
            <li>
              <a href={getLocalizedPath('digital-marketing')} className="transition hover:text-theme-mad">
                {t('marketing_nav')}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-theme-text">
            {t('about')}
          </h3>
          <ul className="mt-4 space-y-2.5 text-xs tracking-wider">
            <li>
              <a href={getLocalizedPath('about')} className="transition hover:text-theme-mad">
                {t('about_studio')}
              </a>
            </li>
            <li>
              <a href={getLocalizedPath('blog')} className="transition hover:text-theme-mad">
                {t('blog')}
              </a>
            </li>
            <li>
              <a href={getLocalizedPath('privacy')} className="transition hover:text-theme-mad">
                {t('privacy_title')}
              </a>
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
