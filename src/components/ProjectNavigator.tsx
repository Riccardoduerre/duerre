import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioProjects, portfolioCategoryMeta } from '../data/portfolio';

interface ProjectNavigatorProps {
  currentId: string;
}

export default function ProjectNavigator({ currentId }: ProjectNavigatorProps) {
  const { locale, t } = useLocale();

  const currentIndex = portfolioProjects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || portfolioProjects.length <= 1) return null;

  const prevIndex = (currentIndex - 1 + portfolioProjects.length) % portfolioProjects.length;
  const nextIndex = (currentIndex + 1) % portfolioProjects.length;

  const prevProject = portfolioProjects[prevIndex];
  const nextProject = portfolioProjects[nextIndex];

  return (
    <nav
      aria-label="Project pagination"
      className="mt-20 border-t border-theme-border pt-12 md:mt-28 md:pt-16"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-theme-accent">
          {t('explore_label')}
        </span>
        <Link
          to="/portfolio"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-theme-muted transition hover:text-theme-mad"
        >
          {t('all_projects')} ↗
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Previous Project Card */}
        <Link
          to={`/portfolio/${prevProject.id}`}
          className="portfolio-card group flex items-center gap-5 overflow-hidden rounded-2xl p-4 transition md:p-6"
        >
          <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-theme-bg md:h-24 md:w-32">
            <img
              src={prevProject.image}
              alt={prevProject.title[locale]}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">
              ← {t('prev_project')}
            </span>
            <h3 className="mt-1 truncate text-base font-semibold sm:text-lg">
              {prevProject.title[locale]}
            </h3>
            <p className="mt-0.5 truncate text-xs text-theme-muted">
              {portfolioCategoryMeta[prevProject.category].label[locale]} · {prevProject.year}
            </p>
          </div>
        </Link>

        {/* Next Project Card */}
        <Link
          to={`/portfolio/${nextProject.id}`}
          className="portfolio-card group flex items-center justify-between gap-5 overflow-hidden rounded-2xl p-4 transition md:p-6"
        >
          <div className="min-w-0 flex-1 text-left sm:text-right">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-theme-accent">
              {t('next_project')} →
            </span>
            <h3 className="mt-1 truncate text-base font-semibold sm:text-lg">
              {nextProject.title[locale]}
            </h3>
            <p className="mt-0.5 truncate text-xs text-theme-muted">
              {portfolioCategoryMeta[nextProject.category].label[locale]} · {nextProject.year}
            </p>
          </div>
          <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-theme-bg md:h-24 md:w-32">
            <img
              src={nextProject.image}
              alt={nextProject.title[locale]}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

