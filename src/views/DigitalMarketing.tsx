import ViewWrapper from '../components/ViewWrapper';
import { Link } from '../components/Link';
import { useLocale } from '../i18n/LocaleContext';

const services = [1, 2, 3, 4] as const;
const process = [1, 2, 3] as const;

function DigitalMarketingContent() {
  const { t } = useLocale();

  return (
    <div className="bg-theme-bg">
      {/* Hero Section */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="container mx-auto grid gap-16 px-6 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-theme-accent">
                {t('dm_eyebrow')}
              </span>
              <span className="text-theme-border">/</span>
              <span className="font-mono text-xs text-theme-muted">Advisory Framework</span>
            </div>

            <h1 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-[1.08] tracking-[0.04em] sm:text-5xl md:text-6xl">
              {t('dm_title')}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-theme-muted sm:text-xl">
              {t('dm_intro')}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl transition hover:brightness-110"
              >
                {t('dm_cta')} <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Quick Process Step Preview */}
          <div className="rounded-3xl border border-theme-border bg-theme-surface p-8 sm:p-10 shadow-theme">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-theme-accent">
              Core Methodology
            </span>
            <ol className="mt-6 space-y-6">
              {process.map((step) => (
                <li key={step} className="border-b border-theme-border pb-6 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-[0.08em] text-theme-text">
                      {t(`dm_process_${step}_title`)}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-theme-muted">
                      {t(`dm_process_${step}_desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Service */}
      <section className="border-y border-theme-border bg-theme-surface py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Service Matrix
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-[0.06em] sm:text-4xl md:text-5xl">
              {t('dm_services_title')}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service}
                className="portfolio-card relative overflow-hidden rounded-2xl p-8 sm:p-10 transition duration-300 hover:border-theme-mad"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">
                    Capabilities
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold uppercase tracking-[0.06em] text-theme-text">
                  {t(`dm_service_${service}_title`)}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-theme-muted">
                  {t(`dm_service_${service}_desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Workflow */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Execution Roadmap
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.06em] sm:text-4xl md:text-5xl">
              {t('dm_process_title')}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {process.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-theme-border bg-theme-surface p-8 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-theme-accent">
                  PHASE 0{step}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-[0.08em] text-theme-text">
                  {t(`dm_process_${step}_title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                  {t(`dm_process_${step}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action Banner */}
      <section className="border-t border-theme-border bg-theme-surface py-20 text-theme-text md:py-24">
        <div className="container mx-auto flex flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Engagement
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.06em] sm:text-4xl md:text-5xl">
              {t('dm_final_title')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-theme-muted sm:text-lg">
              {t('dm_final_desc')}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-theme-mad px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition hover:brightness-110"
          >
            {t('dm_final_cta')} <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default function DigitalMarketing(props: any) {
  return (
    <ViewWrapper lang={props.lang}>
      <DigitalMarketingContent {...props} />
    </ViewWrapper>
  );
}
