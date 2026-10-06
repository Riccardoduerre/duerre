import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

const services = [1, 2, 3, 4] as const;
const process = [1, 2, 3] as const;

export default function DigitalMarketing() {
  const { t } = useLocale();

  return (
    <>
      <section className="bg-theme-bg py-20 md:py-28">
        <div className="container mx-auto grid gap-16 px-6 md:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-theme-accent">{t('dm_eyebrow')}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold uppercase leading-tight tracking-[0.12em] md:text-6xl">
              {t('dm_title')}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-theme-muted">{t('dm_intro')}</p>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-theme-mad px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
            >
              {t('dm_cta')}
            </Link>
          </div>

          <ol className="border-l border-theme-border pl-6 md:pl-8">
            {process.map((step, index) => (
              <li key={step} className={`${index > 0 ? 'mt-8 border-t border-theme-border pt-8' : ''}`}>
                <span className="text-xs font-bold tracking-[0.2em] text-theme-accent">0{step}</span>
                <p className="mt-2 text-lg font-semibold uppercase tracking-[0.1em]">{t(`dm_process_${step}_title`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-theme-border bg-theme-surface py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold uppercase leading-tight tracking-[0.12em] md:text-5xl">
            {t('dm_services_title')}
          </h2>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {services.map((service) => (
              <article key={service} className="border-t border-theme-border py-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-theme-accent">0{service}</p>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-[0.1em]">{t(`dm_service_${service}_title`)}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-theme-muted">{t(`dm_service_${service}_desc`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-[0.12em] md:text-5xl">{t('dm_process_title')}</h2>
          <div className="mt-12 grid gap-10 border-t border-theme-border pt-8 md:grid-cols-3 md:gap-8">
            {process.map((step) => (
              <article key={step}>
                <p className="text-xs font-semibold tracking-[0.2em] text-theme-accent">0{step}</p>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-[0.1em]">{t(`dm_process_${step}_title`)}</h3>
                <p className="mt-3 leading-relaxed text-theme-muted">{t(`dm_process_${step}_desc`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-theme-border bg-theme-surface py-16 text-theme-text md:py-20">
        <div className="container mx-auto flex flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold uppercase tracking-[0.12em] md:text-5xl">{t('dm_final_title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-theme-muted">{t('dm_final_desc')}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 rounded-full bg-theme-mad px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
          >
            {t('dm_final_cta')}
          </Link>
        </div>
      </section>
    </>
  );
}