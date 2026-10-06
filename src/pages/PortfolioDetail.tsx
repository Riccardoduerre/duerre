import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta, portfolioProjects } from '../data/portfolio';

export default function PortfolioDetail() {
  const { id } = useParams();
  const { locale, t } = useLocale();

  const project = useMemo(() => portfolioProjects.find((p) => p.id === id), [id]);

  if (!project) {
    return (
      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-[0.22em]">{t('not_found_project')}</h1>
          <p className="mt-4 text-theme-muted">{t('not_found_project_desc')}</p>
          <Link to="/portfolio" className="mt-6 inline-block text-theme-accent hover:underline">
            ← {t('back_to_portfolio')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <Link to="/portfolio" className="mb-8 inline-block text-sm text-theme-accent hover:underline">
          ← {t('back_to_portfolio')}
        </Link>

        <article className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-accent">{portfolioCategoryMeta[project.category].label[locale]}</p>
            <h1 className="mt-4 break-words text-3xl font-bold uppercase leading-tight tracking-[0.08em] sm:text-4xl sm:tracking-[0.1em] md:text-5xl md:tracking-[0.12em]">
              {project.title[locale]}
            </h1>
            <p className="mt-6 text-lg text-theme-muted">{project.scope[locale]}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] mb-16">
            <div className="section-shell overflow-hidden">
              <img
                src={project.gallery[0]}
                alt={project.title[locale]}
                className="w-full h-[400px] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-theme-accent mb-2">{t('client_label')}</p>
                <p className="text-lg font-semibold">{project.client[locale]}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-theme-accent mb-2">{t('year_label')}</p>
                <p className="text-lg font-semibold">{project.year}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.22em] mb-4">
                {t('challenge_label')}
              </h2>
              <p className="text-lg text-theme-muted leading-relaxed">{project.challenge[locale]}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-[0.22em] mb-4">
                {t('solution_label')}
              </h2>
              <p className="text-lg text-theme-muted leading-relaxed">{project.solution[locale]}</p>
            </div>
          </div>

          <div className="section-shell p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.22em] mb-4">
              {t('results_label')}
            </h2>
            <p className="text-xl text-theme-muted leading-relaxed">{project.results[locale]}</p>
          </div>

          {project.gallery.length > 1 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold uppercase tracking-[0.22em] mb-8">
                {t('gallery_label')}
              </h2>
              <div className="grid gap-4 lg:grid-cols-2">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="section-shell overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title[locale]} - ${idx + 1}`}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
