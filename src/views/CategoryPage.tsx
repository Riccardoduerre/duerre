import ViewWrapper from '../components/ViewWrapper';
import { useMemo } from 'react';
import { Link } from '../components/Link';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta, portfolioProjects, sortProjectsByDateDesc, formatProjectDate, type PortfolioCategory } from '../data/portfolio';

interface CategoryPageProps {
  category: PortfolioCategory;
}

function CategoryPageContent({ category }: CategoryPageProps) {
    const { locale, t } = useLocale();
  const activeCategory = category as PortfolioCategory | undefined;
  const meta = activeCategory ? portfolioCategoryMeta[activeCategory] : undefined;
  const items = useMemo(() => {
    if (!activeCategory) return [];
    return sortProjectsByDateDesc(portfolioProjects.filter((project) => project.category === activeCategory));
  }, [activeCategory]);

  if (!meta) {
    return (
      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 text-center md:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.22em]">{t('category_not_found')}</h1>
          <Link to="/portfolio" className="mt-6 inline-block text-theme-accent hover:underline">
            ← {t('back_to_portfolio')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-theme-bg pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6 md:px-8">
        <Link
          to="/portfolio"
          className="group mb-10 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-theme-accent hover:text-theme-mad"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">{t('back_to_portfolio')}</span>
        </Link>

        {/* Category Manifesto Header */}
        <header className="mb-16 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-theme-accent">
              {meta.eyebrow[locale]}
            </span>
            <span className="text-theme-border">/</span>
            <span className="font-mono text-xs text-theme-muted">
              {items.length} {t('category_projects_count')}
            </span>
          </div>

          <h1 className="mt-4 break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {meta.headline[locale]}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-theme-muted sm:text-xl">
            {meta.description[locale]}
          </p>

          {/* Core Focus Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {meta.featureList.map((feature) => (
              <span
                key={feature[locale]}
                className="rounded-full border border-theme-border bg-theme-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-theme-text shadow-sm"
              >
                {feature[locale]}
              </span>
            ))}
          </div>
        </header>

        {/* Category Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((project, idx) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="portfolio-card group flex flex-col overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-theme-bg">
                <img
                  src={project.image}
                  alt={project.title[locale]}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                
                <span className="absolute left-4 top-4 inline-flex min-h-8 items-center rounded-full border border-white/20 bg-black/60 px-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {meta.label[locale]}
                </span>

                <span className="absolute right-4 bottom-3 font-mono text-xs font-semibold text-white/80">
                  {formatProjectDate(project)}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-theme-accent">
                    {project.client[locale]}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-theme-text transition group-hover:text-theme-mad">
                    {project.title[locale]}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                    {project.challenge[locale]}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-theme-border/70 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag[locale]}
                        className="rounded-full border border-theme-border bg-theme-bg/80 px-2.5 py-1 text-xs font-medium text-theme-muted"
                      >
                        {tag[locale]}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-theme-accent transition group-hover:text-theme-mad">
                    {t('view_project')} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <div className="rounded-2xl border border-dashed border-theme-border bg-theme-surface p-12 text-center text-theme-muted">
            {t('no_projects_in_category')}
          </div>
        )}

        {/* Commission Callout Banner */}
        <div className="mt-20 rounded-2xl border border-theme-border bg-theme-surface p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-theme-accent">
                {t('contact_intent_label')}
              </span>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-[0.06em]">
                {locale === 'it'
                  ? `Commissiona un progetto in ${meta.label[locale]}`
                  : `Commission a ${meta.label[locale]} Project`}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-theme-muted">
                {t('footer_cta_desc')}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-theme-mad px-7 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:brightness-110"
            >
              {t('contact')} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CategoryPage(props: any) {
  return (
    <ViewWrapper lang={props.lang}>
      <CategoryPageContent category={props.id as any} />
    </ViewWrapper>
  );
}
