import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

const heroImage = new URL('../assets/images/_RIK7376_HDR.jpg', import.meta.url).href;

export default function Home() {
  const { t, locale } = useLocale();

  const content = {
    heroTitle: t('hero_headline'),
    heroSubtitle: t('hero_subheadline'),
    primary: t('hero_cta_primary'),
    secondary: t('hero_cta_secondary'),
    service1: t('service_1_title'),
    service2: t('service_2_title'),
    service3: t('service_3_title'),
    desc1: t('service_1_desc'),
    desc2: t('service_2_desc'),
    desc3: t('service_3_desc'),
  };

  return (
    <div>
      <section
        className="hero relative min-h-[calc(100vh-6rem)] bg-cover bg-center text-theme-text"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-theme-bg/30" />
        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-[0.2em] md:text-6xl">{content.heroTitle}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-theme-muted">{content.heroSubtitle}</p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to={`/${locale}/portfolio`}
              className="rounded-sm bg-theme-accent px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              {content.primary}
            </Link>
            <Link
              to={`/${locale}/contact`}
              className="rounded-sm border border-theme-border px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-theme-surface"
            >
              {content.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: content.service1, body: content.desc1 },
              { title: content.service2, body: content.desc2 },
              { title: content.service3, body: content.desc3 },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-sm border border-theme-border bg-theme-surface p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold uppercase tracking-[0.2em]">{service.title}</h3>
                <p className="mt-5 text-theme-muted leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
