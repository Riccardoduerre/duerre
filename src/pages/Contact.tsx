import { useLocale } from '../i18n/LocaleContext';

export default function Contact() {
  const { t } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{t('contact')}</p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.2em] md:text-6xl">{t('contact')}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-theme-muted">
              {t('contact_intro')}
            </p>
            <div className="mt-10 space-y-4 text-sm uppercase tracking-[0.2em] text-theme-muted">
              <p>
                <span className="font-bold text-theme-text">Email:</span> info@duerremedia.com
              </p>
              <p>
                <span className="font-bold text-theme-text">Location:</span> Italy / Remote
              </p>
            </div>
          </div>
          <form className="space-y-6 rounded-sm border border-theme-border bg-theme-surface p-8 shadow-sm">
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-theme-muted">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-sm border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-theme-muted">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-sm border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-theme-muted">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project"
                className="w-full rounded-sm border border-theme-border bg-theme-bg px-4 py-4 text-theme-text outline-none transition focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-sm bg-theme-accent px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
