import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioProjects, portfolioCategoryMeta, sortProjectsByDateDesc, formatProjectDate, type PortfolioCategory } from '../data/portfolio';

type FilterType = 'all' | PortfolioCategory;

const filterItems: { key: string; value: FilterType }[] = [
  { key: 'filter_all', value: 'all' },
  { key: 'filter_photo', value: 'photo' },
  { key: 'filter_video', value: 'video' },
  { key: 'filter_3d', value: '3d' },
];

export default function Portfolio() {
  const { locale, t } = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    const list = activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);
    return sortProjectsByDateDesc(list);
  }, [activeFilter]);

  return (
    <div className="bg-theme-bg pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <header className="mb-12 max-w-4xl md:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-theme-accent">
              Riccardo Riva
            </span>
            <span className="text-theme-border">/</span>
            <span className="font-mono text-xs text-theme-muted">
              {filteredProjects.length} {t('projects_count_label')}
            </span>
          </div>

          <h1 className="mt-4 break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t('portfolio_heading')}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-theme-muted sm:text-lg">
            {t('seo_portfolio')}
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {filterItems.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad ${
                    isActive
                      ? 'bg-theme-mad text-white shadow-md'
                      : 'border border-theme-border bg-theme-surface text-theme-text hover:border-theme-mad hover:text-theme-mad'
                  }`}
                >
                  {t(filter.key)}
                </button>
              );
            })}
          </div>
        </header>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const meta = portfolioCategoryMeta[project.category];
            return (
              <article
                key={project.id}
                className="portfolio-card group flex flex-col overflow-hidden rounded-2xl transition duration-300"
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="relative block aspect-[4/3] overflow-hidden bg-theme-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
                >
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute left-4 top-4 inline-flex min-h-8 items-center rounded-full border border-white/20 bg-black/60 px-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    {meta.label[locale]}
                  </span>

                  <span className="absolute right-4 bottom-3 font-mono text-xs font-semibold text-white/80">
                    {formatProjectDate(project)}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em]">
                      <span className="text-theme-accent">{project.client[locale]}</span>
                    </div>

                    <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-theme-text transition group-hover:text-theme-mad">
                      <Link to={`/portfolio/${project.id}`}>
                        {project.title[locale]}
                      </Link>
                    </h2>

                    <p className="mt-2.5 text-xs leading-relaxed text-theme-muted line-clamp-2">
                      {project.challenge[locale]}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-theme-border/70 pt-4">
                    <span className="text-xs font-medium tracking-wider text-theme-muted">
                      {meta.tags[0]?.[locale]}
                    </span>
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-[0.14em] text-theme-accent transition hover:text-theme-mad"
                    >
                      {t('view_project')} →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Category Deep Links */}
        <div className="mt-20 rounded-2xl border border-theme-border bg-theme-surface p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-theme-accent">
                {t('explore_label')}
              </span>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-[0.06em]">
                {t('explore_discipline')}
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/photo"
                className="rounded-full border border-theme-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-theme-mad hover:text-theme-mad"
              >
                {t('explore_photo')} →
              </Link>
              <Link
                to="/video"
                className="rounded-full border border-theme-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-theme-mad hover:text-theme-mad"
              >
                {t('explore_video')} →
              </Link>
              <Link
                to="/3d"
                className="rounded-full border border-theme-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-theme-mad hover:text-theme-mad"
              >
                {t('explore_3d')} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
