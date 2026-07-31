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
        className="relative min-h-[calc(100vh-6rem)] bg-cover bg-center text-theme-text"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-theme-bg/35" />
        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <span className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/85">
            Riccardo Riva
          </span>
          <h1 className="max-w-5xl text-4xl font-bold uppercase tracking-[0.22em] text-white md:text-6xl">
            {content.heroTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85">{content.heroSubtitle}</p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to={`/${locale}/portfolio`}
              className="rounded-full bg-theme-accent px-10 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              {content.primary}
            </Link>
            <Link
              to={`/${locale}/contact`}
              className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:bg-white/20"
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
                className="section-shell p-8 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold uppercase tracking-[0.24em]">{service.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-theme-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
