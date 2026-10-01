import { Link, useParams } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta, portfolioProjects, type PortfolioCategory } from '../data/portfolio';

interface CategoryPageProps {
  category: PortfolioCategory;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const params = useParams();
  const { locale } = useLocale();
  const activeCategory = (category || params.category) as PortfolioCategory | undefined;
  const meta = activeCategory ? portfolioCategoryMeta[activeCategory] : undefined;
  const items = activeCategory ? portfolioProjects.filter((project) => project.category === activeCategory) : [];

  const { t } = useLocale();

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
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <Link to="/portfolio" className="mb-8 inline-block text-sm text-theme-accent hover:underline">
          ← {t('back_to_portfolio')}
        </Link>

        <div className="mb-16 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.34em] text-theme-accent">{meta.eyebrow[locale]}</p>
          <h1 className="mt-5 text-4xl font-bold uppercase tracking-[0.22em] md:text-6xl">{meta.headline[locale]}</h1>
          <p className="mt-6 text-lg leading-relaxed text-theme-muted">{meta.description[locale]}</p>
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          {meta.featureList.map((feature) => (
            <span
              key={feature[locale]}
              className="rounded-full border border-theme-border bg-theme-surface px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-theme-text"
            >
              {feature[locale]}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="section-shell overflow-hidden transition duration-300 hover:-translate-y-1 group"
            >
              <img
                src={project.image}
                alt={project.title[locale]}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-accent">{meta.label[locale]}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-theme-muted">{project.year}</p>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-[0.2em]">{project.title[locale]}</h2>
                <p className="text-theme-muted leading-relaxed">{project.challenge[locale]}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {meta.tags.map((tag) => (
                    <span key={tag[locale]} className="rounded-full border border-theme-border px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-theme-muted">
                      {tag[locale]}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <div className="rounded-[28px] border border-dashed border-theme-border bg-theme-surface p-10 text-center text-theme-muted">
            {t('no_projects_in_category')}
          </div>
        )}
      </div>
    </section>
  );
}
