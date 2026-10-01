import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta, portfolioProjects } from '../data/portfolio';

export default function Portfolio() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-theme-accent">{t('portfolio')}</p>
          <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.22em] md:text-6xl">{t('portfolio_heading')}</h1>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {Object.values(portfolioCategoryMeta).map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="section-shell block p-8 transition duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-accent">{item.label[locale]}</p>
              <h2 className="mt-5 text-2xl font-bold uppercase tracking-[0.18em]">{item.headline[locale]}</h2>
              <p className="mt-4 text-sm leading-relaxed text-theme-muted">{item.description[locale]}</p>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="section-shell overflow-hidden transition duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title[locale]}
                className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-accent">{portfolioCategoryMeta[project.category].label[locale]}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-muted">{project.year}</p>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-[0.2em]">{project.title[locale]}</h2>
                <p className="text-theme-muted leading-relaxed">{project.challenge[locale]}</p>
                <div className="grid gap-3 text-sm text-theme-muted">
                  <p>
                    <span className="font-semibold text-theme-text">{t('portfolio_client_prefix')}:</span> {project.client[locale]}
                  </p>
                  <p>
                    <span className="font-semibold text-theme-text">{t('portfolio_scope_prefix')}:</span> {project.scope[locale]}
                  </p>
                  <p>
                    <span className="font-semibold text-theme-text">{t('portfolio_results_prefix')}:</span> {project.results[locale]}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.gallery.slice(0, 2).map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={project.title[locale]}
                      className="h-40 w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
