import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

// Initialize EmailJS (free tier - 200 emails/month)
// Public Key for this specific project
emailjs.init({
  publicKey: 'OU8uo5N_6Yp0oEWfP',
});

export default function Contact() {
  const { t } = useLocale();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError('');

    try {
      await emailjs.sendForm(
        'service_duerre_prod',
        'template_contact_riccardo',
        formRef.current,
        'OU8uo5N_6Yp0oEWfP'
      );

      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('contact_form_error'));
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-theme-accent">{t('contact')}</p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.22em] md:text-6xl">{t('contact')}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-theme-muted">
              {t('contact_intro')}
            </p>
            <div className="mt-10 space-y-4 text-sm uppercase tracking-[0.2em] text-theme-muted">
              <p>
                <span className="font-bold text-theme-text">{t('contact_email_label')}:</span> {t('contact_email_value')}
              </p>
              <p>
                <span className="font-bold text-theme-text">{t('contact_location_label')}:</span> {t('contact_location_value')}
              </p>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="section-shell space-y-6 p-8">
            {submitted && (
              <div className="rounded-2xl bg-green-100 p-4 text-sm text-green-800" role="alert">
                {t('contact_form_success')}
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-red-100 p-4 text-sm text-red-800" role="alert">
                ✗ {error}
              </div>
            )}

            <div>
              <label htmlFor="user_name" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                {t('contact_form_full_name')}
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder={t('contact_form_name_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                {t('contact_form_email')}
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder={t('contact_form_email_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                {t('contact_form_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t('contact_form_message_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="privacy_acknowledgement"
                name="privacy_acknowledgement"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#00B3FF]"
              />
              <div>
                <label htmlFor="privacy_acknowledgement" className="text-sm leading-relaxed text-theme-muted">
                  {t('privacy_ack')}
                </label>
                <p className="mt-1 text-sm">
                  <Link to="/privacy" className="font-semibold text-theme-accent underline decoration-theme-border underline-offset-4 hover:decoration-theme-accent">
                    {t('privacy_link')}
                  </Link>
                </p>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-theme-accent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2B2B2C] transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t('contact_form_sending') : t('contact_form_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
