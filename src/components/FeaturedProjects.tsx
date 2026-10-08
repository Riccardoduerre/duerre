import { Link } from '../components/Link';
import { useLocale } from '../i18n/LocaleContext';
import { featuredPortfolioProjects, portfolioCategoryMeta, formatProjectDate, type PortfolioCategory } from '../data/portfolio';
import { FadeIn } from './FadeIn';

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
            <h2 className="max-w-4xl break-words text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t('portfolio_heading')}
            </h2>
          </div>
        </header>
      )}

      {featuredPortfolioProjects.map((project, index) => {
        const category = project.category;
        const meta = portfolioCategoryMeta[category];
        const isReversed = index % 2 === 1;

        return (
          <section key={project.id} className="bg-theme-bg px-4 py-8 sm:px-6 sm:py-12 md:px-8">
            <FadeIn>
              <div className="portfolio-card group relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
                <div className="absolute inset-x-8 top-0 h-px bg-theme-accent" />
                <div className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
                  {/* Image Showcase */}
                  <Link
                    to={`/portfolio/${project.id}`}
                    data-navbar-theme="dark"
                    aria-label={`${t('view_project')}: ${project.title[locale]}`}
                    className={`relative block aspect-[5/4] min-w-0 overflow-hidden bg-theme-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-theme-mad sm:aspect-[16/10] lg:aspect-auto lg:min-h-[460px] ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title[locale]}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Category Pill */}
                    <span className="absolute left-4 top-4 inline-flex min-h-9 items-center rounded-full border border-white/20 bg-black/60 px-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                      {meta.label[locale]}
                    </span>
                  </Link>

                  {/* Editorial Details */}
                  <div
                    className={`relative flex min-w-0 flex-col justify-center p-6 text-theme-text sm:p-10 lg:p-14 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em]">
                      <span className="text-theme-accent">{meta.eyebrow[locale]}</span>
                      <span className="font-mono text-theme-muted">{formatProjectDate(project)}</span>
                    </div>

                    <h2 className="mt-4 max-w-xl break-words text-2xl font-black leading-tight tracking-[0.04em] sm:text-3xl lg:text-4xl">
                      {project.title[locale]}
                    </h2>

                    <div className="mt-3 flex items-center gap-2 text-xs font-medium tracking-wider text-theme-accent">
                      <span className="font-bold">{t('client_label')}:</span>
                      <span>{project.client[locale]}</span>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-theme-muted sm:text-base">
                      {project.scope[locale]}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag[locale]}
                          className="rounded-full border border-theme-border bg-theme-bg/80 px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-theme-muted"
                        >
                          {tag[locale]}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-theme-mad px-6 text-center text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-mad"
                      >
                        {t('view_project')} <span aria-hidden="true" className="ml-2">→</span>
                      </Link>
                      <Link
                        to={categoryPaths[category]}
                        className="inline-flex min-h-11 items-center border-b border-theme-border text-xs font-semibold uppercase tracking-[0.16em] text-theme-muted transition hover:border-theme-mad hover:text-theme-mad focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-mad"
                      >
                        {t(categoryActionKeys[category])}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        );
      })}
    </>
  );
}