import { useLocale } from '../i18n/LocaleContext';

const projectImages = {
  commercial: new URL('../assets/images/DSCN7050.JPG', import.meta.url).href,
  editorial: new URL('../assets/images/_DSC2919.jpg', import.meta.url).href,
};

const projects = [
  {
    title: 'Commercial Campaign',
    category: 'Commercial',
    image: projectImages.commercial,
    description: 'A premium visual campaign for a luxury lifestyle brand.',
  },
  {
    title: 'Editorial Story',
    category: 'Editorial',
    image: projectImages.editorial,
    description: 'A curated editorial series with cinematic lighting and motion.',
  },
];

export default function Portfolio() {
  const { t } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{t('portfolio')}</p>
          <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.2em] md:text-6xl">{t('portfolio_heading')}</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-sm border border-theme-border bg-theme-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="h-96 w-full object-cover" />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-500">{project.category}</p>
                <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.2em]">{project.title}</h2>
                <p className="mt-5 text-theme-muted leading-relaxed">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
