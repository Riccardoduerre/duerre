import ViewWrapper from '../components/ViewWrapper';
import { Link } from '../components/Link';
import { useLocale } from '../i18n/LocaleContext';

import aboutImg from '../assets/images/optimized/DSCN7050.webp';
const aboutImage = typeof aboutImg === 'string' ? aboutImg : (aboutImg as any).src;

const clients = [
  'Alps Apparel Co.',
  'Dolomiti Tourism Board',
  'Maison Lumen Paris',
  'Studio Riva Editorial',
  'Venice Modern Art Gallery',
  'Alpine Horizon Magazine',
];

const capabilities = [
  { label: 'Photography', specs: 'Commercial Campaigns, Editorial Stills, Medium Format, Studio & Remote Location' },
  { label: 'Motion & Cinema', specs: 'Commercial Showreels, Brand Films, Color Grading, 4K Cinema Production' },
  { label: '3D CGI & Spatial', specs: 'Product Visuals, CGI Environments, Shading & Lighting, Unreal / Blender' },
  { label: 'Digital Strategy', specs: 'Audience Targeting, Visual Positioning, Creative Direction, Media Optimization' },
];

function AboutContent() {
  const { locale, t } = useLocale();

  return (
    <div className="bg-theme-bg pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6 md:px-8">
        {/* Main Monograph Spread */}
        <section className="mb-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-theme-accent">
                {t('about')}
              </span>
              <span className="text-theme-border">/</span>
              <span className="font-mono text-xs text-theme-muted">Riccardo Riva</span>
            </div>

            <h1 className="mt-4 break-words text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t('about_title')}
            </h1>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-theme-muted sm:text-lg">
              <p>{t('about_intro_1')}</p>
              <p>{t('about_intro_2')}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg transition hover:brightness-110"
              >
                {t('portfolio')} <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-theme-border bg-theme-surface px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-theme-text transition hover:border-theme-mad hover:text-theme-mad"
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          <div className="portfolio-card relative overflow-hidden rounded-3xl">
            <img
              src={aboutImage}
              alt="Riccardo Riva — Photographer & Visual Director"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="block font-mono text-xs tracking-widest text-white/70">
                PORTRAIT · RICCARDO RIVA
              </span>
              <p className="mt-1 text-sm font-semibold tracking-wider">
                Visual Director & Commercial Photographer
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="mb-24 border-t border-theme-border pt-16 md:pt-20">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Philosophy
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('about_philosophy_title')}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="portfolio-card rounded-2xl p-8 transition duration-300 hover:border-theme-mad"
              >
                <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-theme-text">
                  {t(`about_principle_${num}_title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                  {t(`about_principle_${num}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Clients & Collaborations */}
        <section className="mb-24 border-t border-theme-border pt-16 md:pt-20">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Commercial Provenance
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('about_clients_title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-theme-border bg-theme-surface p-6 text-center shadow-sm"
              >
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-theme-text sm:text-base">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Production Capabilities & Specs */}
        <section className="border-t border-theme-border pt-16 md:pt-20">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.26em] text-theme-accent">
              Technical Standards
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('about_capabilities_title')}
            </h2>
            <p className="mt-3 text-base text-theme-muted">
              {t('about_capabilities_desc')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="rounded-2xl border border-theme-border bg-theme-surface p-8"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">
                  {cap.label}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-theme-muted">
                  {cap.specs}
                </p>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-theme-mad px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition hover:brightness-110"
            >
              {t('contact')} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function About(props: any) {
  return (
    <ViewWrapper lang={props.lang}>
      <AboutContent {...props} />
    </ViewWrapper>
  );
}
