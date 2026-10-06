import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

// Initialize EmailJS (free tier - 200 emails/month)
// Public Key for this specific project
emailjs.init({
  publicKey: 'fUaHuXVCiN713hf1m',
});

type ProjectIntent = 'photo' | 'video' | '3d' | 'dm' | 'campaign';

export default function Contact() {
  const { t } = useLocale();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedIntent, setSelectedIntent] = useState<ProjectIntent>('photo');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mailFallback, setMailFallback] = useState('');

  const intentOptions: { key: ProjectIntent; labelKey: string }[] = [
    { key: 'photo', labelKey: 'contact_intent_photo' },
    { key: 'video', labelKey: 'contact_intent_video' },
    { key: '3d', labelKey: 'contact_intent_3d' },
    { key: 'dm', labelKey: 'contact_intent_dm' },
    { key: 'campaign', labelKey: 'contact_intent_campaign' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError('');
    setMailFallback('');

    const intentLabel = t(intentOptions.find((i) => i.key === selectedIntent)?.labelKey || 'contact_intent_photo');

    try {
      await emailjs.sendForm(
        'service_k40isq9',
        'template_ipjxcbm',
        formRef.current,
        'fUaHuXVCiN713hf1m'
      );

      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(t('contact_form_error'));
      const values = new FormData(formRef.current);
      const name = String(values.get('user_name') ?? '');
      const email = String(values.get('user_email') ?? '');
      const message = String(values.get('message') ?? '');
      const subject = `${t('contact_form_send')}: ${name} [${intentLabel}]`;
      const body = `${t('contact_intent_label')}: ${intentLabel}\n${t('contact_form_full_name')}: ${name}\n${t('contact_form_email')}: ${email}\n\n${message}`;
      setMailFallback(`mailto:${t('contact_email_value')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-theme-bg py-24 sm:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left Column: Studio Editorial Monograph */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-theme-border bg-theme-surface/80 px-3.5 py-1.5 text-xs text-theme-muted backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{t('contact_response_time')}</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold uppercase tracking-[0.2em] md:text-6xl">
              {t('contact')}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-theme-muted">
              {t('contact_intro')}
            </p>

            <div className="mt-12 space-y-6 border-t border-theme-border pt-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-theme-accent">
                  {t('contact_email_label')}
                </p>
                <a
                  href={`mailto:${t('contact_email_value')}`}
                  className="mt-2 inline-block text-lg font-medium text-theme-text transition hover:text-theme-mad"
                >
                  {t('contact_email_value')}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-theme-accent">
                  {t('contact_location_label')}
                </p>
                <p className="mt-2 text-base text-theme-muted">
                  {t('contact_location_value')}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-theme-accent">
                  Studio Direct
                </p>
                <p className="mt-2 text-sm text-theme-muted">
                  Milan · Brescia · Remote Creative Direction Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="section-shell space-y-6 p-8 sm:p-10"
          >
            {/* Intent Selector Chips */}
            <div>
              <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                {t('contact_intent_label')}
              </label>
              <div className="flex flex-wrap gap-2">
                {intentOptions.map((opt) => {
                  const isSelected = selectedIntent === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setSelectedIntent(opt.key)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition ${
                        isSelected
                          ? 'bg-theme-mad text-white shadow-sm'
                          : 'border border-theme-border bg-theme-bg text-theme-muted hover:border-theme-mad hover:text-theme-text'
                      }`}
                    >
                      {t(opt.labelKey)}
                    </button>
                  );
                })}
              </div>
              <input
                type="hidden"
                name="project_type"
                value={t(intentOptions.find((i) => i.key === selectedIntent)?.labelKey || 'contact_intent_photo')}
              />
            </div>

            {submitted && (
              <div
                className="rounded-2xl border border-green-200 bg-green-100 p-5 text-sm text-green-900 dark:border-green-800/60 dark:bg-green-950/40 dark:text-green-300"
                role="alert"
              >
                <p className="font-semibold">{t('contact_form_success')}</p>
                <p className="mt-1 text-xs opacity-90">{t('contact_response_time')}</p>
              </div>
            )}

            {error && (
              <div
                className="rounded-2xl border border-red-200 bg-red-100 p-5 text-sm text-red-900 dark:border-red-800/60 dark:bg-red-950/40 dark:text-red-300"
                role="alert"
              >
                <p className="font-semibold">✗ {error}</p>
                {mailFallback && (
                  <a
                    href={mailFallback}
                    className="mt-2 inline-flex min-h-10 items-center font-semibold underline underline-offset-4 hover:text-theme-mad"
                  >
                    {t('contact_form_mailto')}
                  </a>
                )}
              </div>
            )}

            <div>
              <label
                htmlFor="user_name"
                className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted"
              >
                {t('contact_form_full_name')}
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder={t('contact_form_name_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-mad"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted"
              >
                {t('contact_form_email')}
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder={t('contact_form_email_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-mad"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted"
              >
                {t('contact_form_message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t('contact_form_message_placeholder')}
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-mad"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy_acknowledgement"
                name="privacy_acknowledgement"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-theme-mad"
              />
              <div>
                <label
                  htmlFor="privacy_acknowledgement"
                  className="text-sm leading-relaxed text-theme-muted"
                >
                  {t('privacy_ack')}
                </label>
                <p className="mt-1 text-sm">
                  <Link
                    to="/privacy"
                    className="font-semibold text-theme-accent underline decoration-theme-border underline-offset-4 hover:text-theme-mad hover:decoration-theme-mad"
                  >
                    {t('privacy_link')}
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-theme-mad px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? t('contact_form_sending') : t('contact_form_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
