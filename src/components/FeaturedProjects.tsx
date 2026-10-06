import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { featuredPortfolioProjects, portfolioCategoryMeta, type PortfolioCategory } from '../data/portfolio';

const categoryPaths: Record<PortfolioCategory, string> = {
  '3d': '/3d',
  photo: '/photo',
  video: '/video',
};

const categoryActionKeys: Record<PortfolioCategory, string> = {
  '3d': 'view_all_3d',
  photo: 'view_all_photo',
  video: 'view_all_video',
};

interface FeaturedProjectsProps {
  pageHeading?: boolean;
}

export default function FeaturedProjects({ pageHeading = false }: FeaturedProjectsProps) {
  const { locale, t } = useLocale();

  return (
    <>
      {pageHeading && (
        <header className="bg-theme-bg py-12 sm:py-16">
          <div className="container mx-auto px-6 md:px-8">
            <h1 className="max-w-4xl break-words text-3xl font-bold uppercase leading-tight tracking-[0.08em] sm:text-5xl">
              {t('portfolio_heading')}
            </h1>
          </div>
        </header>
      )}

      {featuredPortfolioProjects.map((project, index) => {
        const category = project.category;
        const meta = portfolioCategoryMeta[category];

        return (
          <section key={project.id} className="bg-theme-bg px-4 py-7 sm:px-6 sm:py-10 md:px-8">
            <div className="portfolio-card group relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
              <div className="absolute inset-x-8 top-0 h-px bg-theme-accent" />
              <div className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
                <Link
                  to={`/portfolio/${project.id}`}
                  aria-label={`${t('view_project')}: ${project.title[locale]}`}
                  className="relative block aspect-[5/4] min-w-0 overflow-hidden bg-theme-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-theme-mad sm:aspect-[16/10] lg:aspect-auto lg:min-h-[430px]"
                >
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />
                  <span className="absolute left-4 top-4 inline-flex min-h-9 items-center rounded-full border border-white/25 bg-slate-950/60 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                    {meta.label[locale]}
                  </span>
                </Link>

                <div className="relative flex min-w-0 flex-col justify-center p-6 text-theme-text sm:p-9 lg:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    <span className="text-theme-accent">{meta.eyebrow[locale]}</span>
                    <span className="text-theme-muted">{project.year}</span>
                  </div>
                  <h2 className="mt-5 max-w-xl break-words text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {project.title[locale]}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-theme-muted sm:text-base">
                    {project.scope[locale]}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span key={tag[locale]} className="rounded-full border border-theme-border bg-theme-bg/70 px-3 py-1.5 text-[10px] font-medium tracking-[0.04em] text-theme-muted">
                        {tag[locale]}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Link
                      to={categoryPaths[category]}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-theme-mad px-5 text-center text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-mad"
                    >
                      {t(categoryActionKeys[category])} <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex min-h-11 items-center border-b border-theme-accent text-sm font-semibold text-theme-text transition hover:border-theme-mad hover:text-theme-mad focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-mad"
                    >
                      {t('view_project')} <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}