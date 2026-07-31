import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

const aboutImage = new URL('../assets/images/DSCN7050.JPG', import.meta.url).href;

export default function About() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-theme-bg py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.34em] text-theme-accent">{t('about')}</p>
            <h1 className="text-4xl font-bold uppercase tracking-[0.22em] md:text-5xl">
              The story behind the lens
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-theme-muted">
              I’m a photographer and videographer based in Italy, helping premium brands tell their stories through strategic visual direction.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-theme-muted">
              I specialize in commercial photography, film production and creative guidance for campaigns that need authentic, cinematic imagery.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to={`/${locale}/portfolio`}
                className="rounded-full border border-theme-border px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] transition hover:border-theme-accent"
              >
                {t('portfolio')}
              </Link>
              <Link
                to={`/${locale}/contact`}
                className="rounded-full bg-theme-accent px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
          <div className="section-shell overflow-hidden">
            <img
              src={aboutImage}
              alt="Riccardo Riva"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
