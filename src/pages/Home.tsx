import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { portfolioCategoryMeta } from '../data/portfolio';

const heroImage = new URL('../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;
const photoImage = new URL('../assets/images/optimized/Giau_00001.webp', import.meta.url).href;
const videoImage = new URL('../assets/images/optimized/_DSC2365.webp', import.meta.url).href;

export default function Home() {
  const { t, locale } = useLocale();

  const content = {
    heroTitle: t('hero_headline'),
    heroSubtitle: t('hero_subheadline'),
    primary: t('hero_cta_primary'),
    secondary: t('hero_cta_secondary'),
  };

  const showreelCards = [
    { id: 'photo', badge: portfolioCategoryMeta.photo.eyebrow[locale], title: portfolioCategoryMeta.photo.headline[locale], description: portfolioCategoryMeta.photo.description[locale], features: portfolioCategoryMeta.photo.featureList.map((item) => item[locale]), pills: portfolioCategoryMeta.photo.tags.map((tag) => tag[locale]), secondary: t('home_photo_secondary'), image: photoImage, button: '/photo' },
    { id: 'video', badge: portfolioCategoryMeta.video.eyebrow[locale], title: portfolioCategoryMeta.video.headline[locale], description: portfolioCategoryMeta.video.description[locale], features: portfolioCategoryMeta.video.featureList.map((item) => item[locale]), pills: portfolioCategoryMeta.video.tags.map((tag) => tag[locale]), secondary: t('home_video_secondary'), image: videoImage, button: '/video' },
    { id: '3d', badge: portfolioCategoryMeta['3d'].eyebrow[locale], title: portfolioCategoryMeta['3d'].headline[locale], description: portfolioCategoryMeta['3d'].description[locale], features: portfolioCategoryMeta['3d'].featureList.map((item) => item[locale]), pills: portfolioCategoryMeta['3d'].tags.map((tag) => tag[locale]), secondary: t('home_3d_secondary'), image: heroImage, button: '/3d' },
  ];

  return (
    <div>
      <section
        className="relative min-h-[calc(100vh-6rem)] overflow-hidden text-theme-text"
      >
        <img src={heroImage} alt="" aria-hidden="true" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
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
              to="/portfolio"
              className="rounded-full bg-theme-accent px-10 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              {content.primary}
            </Link>
            <Link
              to="/contact"
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
              { title: t('service_1_title'), body: t('service_1_desc'), href: '/photo' },
              { title: t('service_2_title'), body: t('service_2_desc'), href: '/video' },
              { title: t('service_3_title'), body: t('service_3_desc'), href: '/3d' },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="section-shell block p-8 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold uppercase tracking-[0.24em]">{service.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-theme-muted">{service.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-theme-bg pb-24">
        <div className="space-y-12">
          {showreelCards.map((card, index) => (
            <div key={card.id} className="container mx-auto px-6 md:px-8">
              <div className={`section-shell relative overflow-hidden p-6 md:p-10 lg:p-14 ${index % 2 === 1 ? 'bg-[#111111]' : ''}`}>
                <div className={`absolute inset-0 ${index % 2 === 1 ? 'bg-[radial-gradient(circle_at_top_left,_rgba(0,179,255,0.25),_transparent_30%),linear-gradient(135deg,_rgba(12,16,18,0.92),_rgba(12,16,18,0.45),_rgba(12,16,18,0.92))]' : 'bg-[radial-gradient(circle_at_top_left,_rgba(197,199,196,0.2),_transparent_30%),linear-gradient(135deg,_rgba(56,62,66,0.9),_rgba(56,62,66,0.5),_rgba(56,62,66,0.92))]'}`} />

                <div className="relative grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="max-w-xl">
                    <span className={`inline-block rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] ${index % 2 === 1 ? 'border-[#00B3FF]/40 bg-[#00B3FF]/10 text-[#d9f7ff]' : 'border-[#c5c7c4]/40 bg-[#f1f0ea]/10 text-[#f1f0ea]'}`}>
                      {card.badge}
                    </span>
                    <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[0.18em] text-white md:text-6xl">
                      {card.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">{card.description}</p>

                    <ul className="mt-8 space-y-4">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                          <span className={`inline-flex h-2.5 w-2.5 rounded-full ${index % 2 === 1 ? 'bg-[#00B3FF]' : 'bg-[#f1f0ea]'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3 text-[9px] font-medium uppercase tracking-[0.26em] text-white/65">
                      {card.pills.map((pill) => (
                        <div key={pill} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
                          {pill}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={card.button}
                      className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#383E42] transition hover:bg-[#f1f0ea]"
                    >
                      {card.id === 'photo' ? t('explore_photo') : card.id === 'video' ? t('explore_video') : t('explore_3d')}
                    </Link>
                  </div>

                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-[2.5rem] blur-3xl ${index % 2 === 1 ? 'bg-[#00B3FF]/20' : 'bg-[#97999B]/20'}`} />
                    <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/30 shadow-[0_36px_90px_rgba(0,0,0,0.3)]">
                      <div className="relative min-h-[520px] md:min-h-[620px]">
                        <img src={card.image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,9,10,0.74)_0%,rgba(13,9,10,0.38)_24%,rgba(13,9,10,0.2)_50%,rgba(13,9,10,0.5)_100%)]" />
                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80 md:p-6">
                          <span>{card.secondary}</span>
                          <span>0{index + 1}</span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 md:p-6">
                          <div className="flex items-end justify-between gap-4">
                            <div className="max-w-[19rem]">
                              <h3 className="mt-2 text-2xl font-bold uppercase leading-tight tracking-[0.14em] text-white md:text-4xl">
                                {card.id === 'photo' ? t('home_photo_title') : card.id === 'video' ? t('home_video_title') : t('home_3d_title')}
                              </h3>
                            </div>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-3">
                            {card.pills.map((item) => (
                              <div key={item} className="rounded-[1rem] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
                                <p className="text-[9px] uppercase tracking-[0.28em] text-white/60">{item}</p>
                                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">0{card.pills.indexOf(item) + 1}</p>
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
          ))}
        </div>
      </section>

      <section className="border-y border-theme-border bg-theme-surface py-20 md:py-24">
        <div className="container mx-auto grid gap-12 px-6 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-theme-accent">{t('marketing_home_eyebrow')}</p>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-tight tracking-[0.12em] md:text-5xl">{t('marketing_home_title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-theme-muted">{t('marketing_home_description')}</p>
            <Link to="/digital-marketing" className="mt-8 inline-flex border-b border-theme-accent pb-2 text-xs font-bold uppercase tracking-[0.2em] text-theme-text transition hover:text-theme-accent">
              {t('marketing_home_cta')} <span aria-hidden="true" className="ml-3">→</span>
            </Link>
          </div>
          <ol className="grid grid-cols-3 gap-4 border-t border-theme-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {[1, 2, 3].map((step) => (
              <li key={step}>
                <span className="text-xs font-semibold tracking-[0.18em] text-theme-accent">0{step}</span>
                <p className="mt-3 text-xs font-bold uppercase leading-relaxed tracking-[0.08em]">{t(`dm_process_${step}_title`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
