import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

const sections = [
  ['privacy_controller_title', 'privacy_controller_body'],
  ['privacy_data_title', 'privacy_data_body'],
  ['privacy_purpose_title', 'privacy_purpose_body'],
  ['privacy_legal_title', 'privacy_legal_body'],
  ['privacy_service_title', 'privacy_service_body'],
  ['privacy_retention_title', 'privacy_retention_body'],
  ['privacy_rights_title', 'privacy_rights_body'],
  ['privacy_storage_title', 'privacy_storage_body'],
] as const;

export default function Privacy() {
  const { t } = useLocale();

  return (
    <section className="bg-theme-bg py-16 sm:py-20">
      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-theme-accent">Duerre Media</p>
        <h1 className="mt-3 break-words text-3xl font-bold uppercase leading-tight tracking-[0.06em] sm:text-5xl">{t('privacy_title')}</h1>
        <p className="mt-5 text-base leading-relaxed text-theme-muted sm:text-lg">{t('privacy_intro')}</p>

        <div className="mt-10">
          {sections.map(([title, body]) => (
            <section key={title} className="border-t border-theme-border py-6">
              <h2 className="text-lg font-bold uppercase leading-snug tracking-[0.06em]">{t(title)}</h2>
              <p className="mt-3 leading-relaxed text-theme-muted">{t(body)}</p>
              {title === 'privacy_service_title' && (
                <a
                  className="mt-2 inline-flex text-sm font-semibold text-theme-accent underline decoration-theme-border underline-offset-4 hover:text-theme-mad hover:decoration-theme-mad"
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EmailJS privacy policy
                </a>
              )}
            </section>
          ))}
        </div>

        <section className="border-t border-theme-border py-6">
          <h2 className="text-lg font-bold uppercase leading-snug tracking-[0.06em]">{t('privacy_contact_title')}</h2>
          <p className="mt-3 leading-relaxed text-theme-muted">
            {t('privacy_contact_body')}{' '}
            <a className="font-semibold text-theme-text underline decoration-theme-accent underline-offset-4" href="mailto:riccardo@duerremedia.com">
              riccardo@duerremedia.com
            </a>.
          </p>
          <Link to="/contact" className="mt-6 inline-flex text-sm font-semibold text-theme-accent hover:underline">← {t('contact')}</Link>
        </section>
      </div>
    </section>
  );
}