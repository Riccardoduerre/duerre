import { Link } from '../components/Link';
import FeaturedProjects from '../components/FeaturedProjects';
import { useLocale, LocaleProvider } from '../i18n/LocaleContext';

import { FadeIn } from '../components/FadeIn';

import heroImg from '../assets/images/optimized/_RIK7376_HDR.webp';
const heroImage = typeof heroImg === 'string' ? heroImg : (heroImg as any).src;

function HomeContent() {
  const { t } = useLocale();

  return (
    <>
      <section
        data-navbar-theme="dark"
        className="relative min-h-screen overflow-hidden text-white flex flex-col justify-between"
      >
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

        {/* Hero Center Statement */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-10 text-center md:px-8 md:pt-40 md:pb-14">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-white/80 sm:mb-6 sm:text-sm">
              Commercial Photography · Cinema · 3D CGI
            </span>
            <h1 className="mx-auto max-w-5xl break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
              {t('hero_headline')}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-8 sm:text-xl drop-shadow-md">
              {t('hero_subheadline')}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-theme-mad px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl transition hover:brightness-110 sm:w-auto"
              >
                {t('hero_cta_primary')} <span aria-hidden="true" className="ml-2">↓</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 bg-black/30 px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:border-theme-mad hover:bg-theme-mad sm:w-auto"
              >
                {t('hero_cta_secondary')}
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Discipline Ticker Bar */}
        <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto grid grid-cols-2 divide-x divide-white/15 md:grid-cols-4">
            <Link
              to="/photo"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_1_title')}
              </span>
            </Link>
            <Link
              to="/video"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_2_title')}
              </span>
            </Link>
            <Link
              to="/3d"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_3_title')}
              </span>
            </Link>
            <Link
              to="/digital-marketing"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('marketing_nav')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section className="border-y border-theme-border bg-theme-surface py-16 text-theme-text sm:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-theme-accent">{t('marketing_home_eyebrow')}</p>
            <h2 className="mt-4 max-w-3xl break-words text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t('marketing_home_title')}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">
              {t('marketing_home_description')}
            </p>
            <Link
              to="/digital-marketing"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:brightness-110"
            >
              {t('marketing_home_cta')}
            </Link>
            </FadeIn>

          <ol className="border-l border-theme-border pl-5 sm:pl-7">
            {[1, 2, 3].map((step) => (
              <li key={step} className="border-b border-theme-border py-4 first:pt-0 last:border-0 last:pb-0">
                <p className="mt-1 text-base font-semibold leading-snug tracking-tight sm:text-lg">
                  {t(`dm_process_${step}_title`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default function Home({ lang }: { lang: 'en' | 'it' }) {
  return (
    <LocaleProvider initialLocale={lang}>
      <HomeContent />
    </LocaleProvider>
  );
}
