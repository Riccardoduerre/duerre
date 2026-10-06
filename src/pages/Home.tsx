import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import { useLocale } from '../i18n/LocaleContext';

const heroImage = new URL('../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <section className="relative min-h-[calc(100svh-5.5rem)] overflow-hidden text-white flex flex-col justify-between">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />

        {/* Top Eyebrow Badge */}
        <div className="relative z-10 container mx-auto px-6 pt-12 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-mono tracking-widest text-white/75">
            <span className="uppercase">Riccardo Riva — Visual Direction</span>
            <span>Studio: Italy / Available Worldwide</span>
          </div>
        </div>

        {/* Hero Center Statement */}
        <div className="relative z-10 container mx-auto px-6 py-12 text-center md:px-8 md:py-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-white/80 sm:mb-6 sm:text-sm">
            Commercial Photography · Cinema · 3D CGI
          </span>
          <h1 className="mx-auto max-w-5xl break-words text-3xl font-black uppercase leading-[1.08] tracking-[0.04em] sm:text-5xl sm:tracking-[0.06em] lg:text-7xl">
            {t('hero_headline')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-8 sm:text-lg">
            {t('hero_subheadline')}
          </p>

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
        </div>

        {/* Discipline Ticker Bar */}
        <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto grid grid-cols-2 divide-x divide-white/15 md:grid-cols-4">
            <Link
              to="/photo"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block font-mono text-[10px] tracking-widest text-white/50">01</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_1_title')}
              </span>
            </Link>
            <Link
              to="/video"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block font-mono text-[10px] tracking-widest text-white/50">02</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_2_title')}
              </span>
            </Link>
            <Link
              to="/3d"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block font-mono text-[10px] tracking-widest text-white/50">03</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('service_3_title')}
              </span>
            </Link>
            <Link
              to="/digital-marketing"
              className="group p-4 text-center transition hover:bg-white/5 md:py-6"
            >
              <span className="block font-mono text-[10px] tracking-widest text-white/50">04</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-white group-hover:text-theme-mad">
                {t('marketing_nav')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section className="border-y border-theme-border bg-theme-surface py-16 text-theme-text sm:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-theme-accent">{t('marketing_home_eyebrow')}</p>
            <h2 className="mt-4 max-w-3xl break-words text-2xl font-bold uppercase leading-tight tracking-[0.06em] sm:text-3xl md:text-4xl">
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
          </div>

          <ol className="border-l border-theme-border pl-5 sm:pl-7">
            {[1, 2, 3].map((step) => (
              <li key={step} className="border-b border-theme-border py-4 first:pt-0 last:border-0 last:pb-0">
                <span className="text-xs font-semibold tracking-[0.12em] text-theme-accent">0{step}</span>
                <p className="mt-1 text-sm font-bold uppercase leading-snug tracking-[0.06em] sm:text-base">
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