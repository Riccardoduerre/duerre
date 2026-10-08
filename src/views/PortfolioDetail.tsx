import ViewWrapper from '../components/ViewWrapper';
import { Link } from '../components/Link';
import { useMemo, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta, portfolioProjects, formatProjectDate } from '../data/portfolio';
import ImageLightbox from '../components/ImageLightbox';
import ProjectNavigator from '../components/ProjectNavigator';

function PortfolioDetailContent({ id }: { id: string }) {
    const { locale, t } = useLocale();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = useMemo(() => portfolioProjects.find((p) => p.id === id), [id]);
  const heroImage = project ? project.image || project.gallery[0] : '';
  const galleryImages = useMemo(() => {
    if (!project) return [];
    return project.gallery.filter((img) => img !== heroImage);
  }, [project, heroImage]);

  const allImages = useMemo(() => {
    if (!project) return [];
    return [heroImage, ...galleryImages].filter(Boolean);
  }, [project, heroImage, galleryImages]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!project) {
    return (
      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 text-center md:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.22em]">{t('not_found_project')}</h1>
          <p className="mt-4 text-theme-muted">{t('not_found_project_desc')}</p>
          <Link to="/portfolio" className="mt-6 inline-block text-theme-accent hover:underline">
            ← {t('back_to_portfolio')}
          </Link>
        </div>
      </section>
    );
  }

  const meta = portfolioCategoryMeta[project.category];

  return (
    <>
      <section className="bg-theme-bg pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="container mx-auto px-6 md:px-8">
          {/* Back breadcrumb */}
          <Link
            to="/portfolio"
            className="group mb-10 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-theme-accent hover:text-theme-mad"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="ml-2">{t('back_to_portfolio')}</span>
          </Link>

          <article className="mx-auto max-w-6xl">
            {/* Header & Meta Bar */}
            <header className="mb-12 border-b border-theme-border pb-12">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-theme-accent">
                <span>{meta.label[locale]}</span>
                <span className="text-theme-border">/</span>
                <span className="font-mono text-theme-muted">{formatProjectDate(project)}</span>
              </div>

              <h1 className="mt-4 break-words text-3xl font-black uppercase leading-[1.08] tracking-[0.04em] sm:text-5xl md:text-6xl">
                {project.title[locale]}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-theme-muted sm:text-xl">
                {project.scope[locale]}
              </p>

              {/* Quick Specs Grid */}
              <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-theme-border bg-theme-surface p-6 sm:grid-cols-4 sm:p-8">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-muted">
                    {t('client_label')}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-theme-text sm:text-base">
                    {project.client[locale]}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-muted">
                    {t('date_label')}
                  </span>
                  <span className="mt-1 block font-mono text-sm font-bold text-theme-text sm:text-base">
                    {formatProjectDate(project)}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-muted">
                    {t('portfolio_scope_prefix')}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-theme-text sm:text-base">
                    {meta.eyebrow[locale]}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-theme-muted">
                    {t('portfolio_results_prefix')}
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-theme-accent sm:text-sm">
                    {t('verified_work')}
                  </span>
                </div>
              </div>
            </header>

            {/* Hero Cover Frame (Clickable for Lightbox) */}
            <div className="mb-16" data-navbar-theme="dark">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                aria-label={t('click_to_expand')}
                className="group relative block w-full overflow-hidden rounded-2xl border border-theme-border bg-theme-surface text-left shadow-theme cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
              >
                <img
                  src={heroImage}
                  alt={project.title[locale]}
                  className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02] sm:h-[540px] md:h-[620px]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md opacity-90 transition group-hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>{t('click_to_expand')}</span>
                </span>
              </button>
            </div>

            {/* Challenge & Solution Narrative Columns */}
            <div className="mb-16 grid gap-10 md:grid-cols-2 md:gap-14">
              <div className="rounded-2xl border border-theme-border bg-theme-surface p-8 sm:p-10">
                <span className="text-xs font-mono tracking-widest text-theme-accent">{t('phase_situation')}</span>
                <h2 className="mt-3 text-xl font-bold uppercase tracking-[0.1em] text-theme-text sm:text-2xl">
                  {t('challenge_label')}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-theme-muted sm:text-lg">
                  {project.challenge[locale]}
                </p>
              </div>

              <div className="rounded-2xl border border-theme-border bg-theme-surface p-8 sm:p-10">
                <span className="text-xs font-mono tracking-widest text-theme-accent">{t('phase_direction')}</span>
                <h2 className="mt-3 text-xl font-bold uppercase tracking-[0.1em] text-theme-text sm:text-2xl">
                  {t('solution_label')}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-theme-muted sm:text-lg">
                  {project.solution[locale]}
                </p>
              </div>
            </div>

            {/* Impact / Results Banner */}
            <div className="portfolio-card relative mb-20 overflow-hidden rounded-2xl p-8 sm:p-12">
              <div className="absolute inset-x-8 top-0 h-px bg-theme-accent" />
              <span className="text-xs font-mono tracking-widest text-theme-accent">{t('phase_outcome')}</span>
              <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.1em] text-theme-text sm:text-2xl">
                {t('results_label')}
              </h2>
              <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-theme-muted sm:text-xl">
                {project.results[locale]}
              </p>
            </div>

            {/* Secondary Curated Gallery (with Lightbox click triggers) */}
            {galleryImages.length > 0 && (
              <section className="mb-20">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-xl font-bold uppercase tracking-[0.16em]">
                    {t('gallery_label')}
                  </h2>
                  <span className="text-xs font-mono text-theme-muted">
                    {t('gallery_lightbox_hint')}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => openLightbox(idx + 1)}
                      aria-label={`${project.title[locale]} - ${idx + 2}`}
                      className="portfolio-card group relative block overflow-hidden rounded-2xl text-left cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
                    >
                      <img
                        src={img}
                        alt={`${project.title[locale]} - ${idx + 2}`}
                        className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:aspect-[16/11]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <span className="rounded-full bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                          {t('click_to_expand')} ↗
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Next/Prev Pagination */}
            <ProjectNavigator currentId={project.id} />
          </article>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={allImages}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        title={project.title[locale]}
      />
    </>
  );
}

export default function PortfolioDetail(props: any) {
  return (
    <ViewWrapper lang={props.lang}>
      <PortfolioDetailContent {...props} />
    </ViewWrapper>
  );
}
