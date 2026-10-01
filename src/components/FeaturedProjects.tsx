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
        const darkPanel = index !== 1;

        return (
          <section key={project.id} className="bg-theme-bg px-4 py-8 sm:px-6 sm:py-12 md:px-8">
            <div className={`relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-[#00B3FF]/35 shadow-theme ${darkPanel ? 'bg-[#383E42]' : 'bg-theme-surface'}`}>
              <div className="absolute inset-x-0 top-0 h-1 bg-[#00B3FF]" />
              <div className="grid min-w-0 lg:grid-cols-[1.08fr_0.92fr]">
                <Link
                  to={`/portfolio/${project.id}`}
                  aria-label={`${t('view_project')}: ${project.title[locale]}`}
                  className="group relative block aspect-[5/4] min-w-0 overflow-hidden bg-[#2B2B2C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00B3FF] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
                >
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2C]/75 via-transparent to-[#2B2B2C]/10" />
                  <span className="absolute left-4 top-4 inline-flex min-h-9 items-center bg-[#00B3FF] px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2B2B2C] sm:left-6 sm:top-6">
                    {meta.label[locale]}
                  </span>
                </Link>

                <div className={`relative flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-10 ${darkPanel ? 'text-[#F1F0EA]' : 'text-theme-text'}`}>
                  <div aria-hidden="true" className="absolute right-0 top-0 hidden h-20 w-20 border-b border-l border-[#00B3FF]/50 sm:block" />
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em]">
                    <span className="text-[#00B3FF]">{meta.eyebrow[locale]}</span>
                    <span className={darkPanel ? 'text-[#C5C7C4]' : 'text-theme-muted'}>{project.year}</span>
                  </div>
                  <h2 className="mt-4 max-w-xl break-words text-2xl font-bold uppercase leading-[1.08] tracking-[0.05em] sm:text-3xl lg:text-4xl">
                    {project.title[locale]}
                  </h2>
                  <p className={`mt-4 max-w-xl text-sm leading-relaxed sm:text-base ${darkPanel ? 'text-[#C5C7C4]' : 'text-theme-muted'}`}>
                    {project.scope[locale]}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span key={tag[locale]} className={`border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${darkPanel ? 'border-white/20 bg-black/10 text-[#F1F0EA]' : 'border-theme-border bg-theme-bg text-theme-muted'}`}>
                        {tag[locale]}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Link
                      to={categoryPaths[category]}
                      className="inline-flex min-h-11 items-center justify-center bg-[#00B3FF] px-4 text-center text-xs font-bold uppercase leading-snug tracking-[0.06em] text-[#2B2B2C] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B3FF]"
                    >
                      {t(categoryActionKeys[category])} <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className={`inline-flex min-h-11 items-center border-b border-[#00B3FF] text-sm font-semibold transition hover:text-[#00B3FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B3FF] ${darkPanel ? 'text-[#F1F0EA]' : 'text-theme-text'}`}
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