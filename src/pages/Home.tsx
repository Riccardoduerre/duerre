import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import { useLocale } from '../i18n/LocaleContext';

const heroImage = new URL('../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden text-white">
        <img src={heroImage} alt="" aria-hidden="true" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/60" />
        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 sm:mb-6 sm:text-sm">
            Riccardo Riva
          </span>
          <h1 className="max-w-5xl break-words text-3xl font-bold uppercase leading-[1.12] tracking-[0.06em] sm:text-4xl sm:tracking-[0.08em] lg:text-6xl">
            {t('hero_headline')}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg">
            {t('hero_subheadline')}
          </p>
          <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <Link
              to="/portfolio"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-theme-accent px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-[#2B2B2C] transition hover:brightness-95 sm:w-auto sm:px-7"
            >
              {t('hero_cta_primary')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/50 bg-black/20 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:bg-white/15 sm:w-auto sm:px-7"
            >
              {t('hero_cta_secondary')}
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section className="bg-[#383E42] py-16 text-[#F1F0EA] sm:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00B3FF]">{t('marketing_home_eyebrow')}</p>
            <h2 className="mt-4 max-w-3xl break-words text-2xl font-bold uppercase leading-tight tracking-[0.06em] sm:text-3xl md:text-4xl">
              {t('marketing_home_title')}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F1F0EA]/85 sm:text-lg">
              {t('marketing_home_description')}
            </p>
            <Link
              to="/digital-marketing"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#00B3FF] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-[#2B2B2C] transition hover:brightness-95"
            >
              {t('marketing_home_cta')}
            </Link>
          </div>

          <ol className="border-l border-[#97999B] pl-5 sm:pl-7">
            {[1, 2, 3].map((step) => (
              <li key={step} className="border-b border-[#97999B]/50 py-4 first:pt-0 last:border-0 last:pb-0">
                <span className="text-xs font-semibold tracking-[0.12em] text-[#00B3FF]">0{step}</span>
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