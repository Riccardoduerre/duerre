import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

const heroImage = new URL('../assets/images/_RIK7376_HDR.jpg', import.meta.url).href;

export default function Home() {
  const { t, locale } = useLocale();

  const content = {
    heroTitle: t('hero_headline'),
    heroSubtitle: t('hero_subheadline'),
    primary: t('hero_cta_primary'),
    secondary: t('hero_cta_secondary'),
    service1: t('service_1_title'),
    service2: t('service_2_title'),
    service3: t('service_3_title'),
    desc1: t('service_1_desc'),
    desc2: t('service_2_desc'),
    desc3: t('service_3_desc'),
  };

  const featureList = [
    'Luxury product storytelling',
    'Immersive motion-led campaigns',
    'Cinematic 3D environment design',
  ];

  const editorialCaptions = [
    { label: 'Campaign still', value: '01 / Product' },
    { label: 'Brand world', value: '02 / Atmosphere' },
    { label: 'Motion ready', value: '03 / Motion' },
  ];

  return (
    <div>
      <section
        className="relative min-h-[calc(100vh-6rem)] bg-cover bg-center text-theme-text"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-theme-bg/35" />
        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <span className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/85">
            Riccardo Riva
          </span>
          <h1 className="max-w-5xl text-4xl font-bold uppercase tracking-[0.22em] text-white md:text-6xl">
            {content.heroTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85">{content.heroSubtitle}</p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to={`/${locale}/portfolio`}
              className="rounded-full bg-theme-accent px-10 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              {content.primary}
            </Link>
            <Link
              to={`/${locale}/contact`}
              className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              {content.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-theme-bg py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: content.service1, body: content.desc1 },
              { title: content.service2, body: content.desc2 },
              { title: content.service3, body: content.desc3 },
            ].map((service) => (
              <article
                key={service.title}
                className="section-shell p-8 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold uppercase tracking-[0.24em]">{service.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-theme-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="section-shell relative overflow-hidden p-6 md:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(190,53,67,0.26),_transparent_33%),linear-gradient(135deg,_rgba(14,12,13,0.86),_rgba(14,12,13,0.38),_rgba(14,12,13,0.92))]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="max-w-xl">
                <span className="inline-block rounded-full border border-[#d97a81]/30 bg-[#d97a81]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#f4cdd0]">
                  3D studio
                </span>
                <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[0.18em] text-white md:text-6xl">
                  {content.service3}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-theme-muted md:text-lg">
                  I create immersive 3D worlds for premium products, fashion narratives, and digital campaigns designed to feel cinematic, tactile, and unmistakably luxurious.
                </p>

                <ul className="mt-8 space-y-4">
                  {featureList.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d97a81] shadow-[0_0_14px_rgba(217,122,129,0.75)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 text-[9px] font-medium uppercase tracking-[0.26em] text-white/65">
                  {editorialCaptions.map((caption) => (
                    <div key={caption.label} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
                      {caption.label} / {caption.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-[#b32838]/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#120d0f] shadow-[0_36px_90px_rgba(0,0,0,0.3)]">
                  <div
                    className="relative min-h-[520px] bg-cover bg-center md:min-h-[620px]"
                    style={{
                      backgroundImage: `linear-gradient(90deg, rgba(13,9,10,0.78) 0%, rgba(13,9,10,0.35) 24%, rgba(13,9,10,0.2) 50%, rgba(13,9,10,0.5) 100%), url(${heroImage})`,
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80 md:p-6">
                      <span>Editorial 3D</span>
                      <span>01 / 03</span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 md:p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div className="max-w-[19rem]">
                          <p className="text-[10px] uppercase tracking-[0.32em] text-white/65">Campaign still</p>
                          <h3 className="mt-2 text-2xl font-bold uppercase leading-tight tracking-[0.14em] text-white md:text-4xl">
                            The new language of luxury motion
                          </h3>
                        </div>
                        <div className="hidden rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm sm:block">
                          Product / Brand / Motion
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {editorialCaptions.map((caption) => (
                          <div key={caption.label} className="rounded-[1rem] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
                            <p className="text-[9px] uppercase tracking-[0.28em] text-white/60">{caption.label}</p>
                            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">{caption.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
