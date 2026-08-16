import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
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
                <span className="font-bold text-theme-text">Email:</span> riccardo@duerremedia.com
              </p>
              <p>
                <span className="font-bold text-theme-text">Location:</span> Italy / Remote
              </p>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="section-shell space-y-6 p-8">
            {submitted && (
              <div className="rounded-2xl bg-green-100 p-4 text-sm text-green-800" role="alert">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-red-100 p-4 text-sm text-red-800" role="alert">
                ✗ {error}
              </div>
            )}

            <div>
              <label htmlFor="user_name" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                Full Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your name"
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                Email Address
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="name@example.com"
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-theme-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project"
                required
                aria-required="true"
                className="w-full rounded-2xl border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-theme-accent"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-theme-accent px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
