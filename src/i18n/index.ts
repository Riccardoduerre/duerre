export type TranslationKeys = Record<string, string>;

export type Locale = 'en' | 'it';

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    home_title: 'Riccardo Riva — Photographer & Visual Director',
    portfolio: 'Portfolio',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    hero_headline: 'Crafting Visual Stories & Digital Content for Premium Brands',
    hero_subheadline: 'Commercial Photography, Videography, and Strategic Media Direction by Riccardo Riva.',
    hero_cta_primary: 'View Selected Work',
    hero_cta_secondary: 'Get in Touch',
    service_1_title: 'Commercial Photography',
    service_2_title: 'Video Production',
    service_3_title: 'Creative Direction',
    service_1_desc: 'High-impact visual assets tailored for premium lifestyle and outdoor brands.',
    service_2_desc: 'Cinematic storytelling and commercial showreels designed for digital engagement.',
    service_3_desc: 'Strategic visual guidance and high-end editing to elevate brand identity.',
    portfolio_heading: 'Selected Projects',
    contact_intro: 'Have a project in mind or just want to say hello? I’d love to hear from you.',
  },
  it: {
    home_title: 'Riccardo Riva — Fotografo & Visual Director',
    portfolio: 'Portfolio',
    about: 'Chi sono',
    blog: 'Blog',
    contact: 'Contatti',
    hero_headline: 'Racconti visivi e contenuti digitali per brand premium',
    hero_subheadline: 'Fotografia commerciale, videografia e direzione media strategica di Riccardo Riva.',
    hero_cta_primary: 'Guarda i Lavori',
    hero_cta_secondary: 'Contattami',
    service_1_title: 'Fotografia Commerciale',
    service_2_title: 'Produzione Video',
    service_3_title: 'Direzione Creativa',
    service_1_desc: 'Asset visivi ad alto impatto per brand lifestyle e outdoor premium.',
    service_2_desc: 'Storytelling cinematografico e showreel commerciali per engagement digitale.',
    service_3_desc: 'Guida visiva strategica e editing di alto livello per valorizzare l’identità del brand.',
    portfolio_heading: 'Progetti Selezionati',
    contact_intro: 'Hai un progetto in mente o vuoi semplicemente dire ciao? Mi piacerebbe sentirti.',
  },
};

export function getPreferredLocale(): Locale {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'it') return stored;

  const navigatorLang = navigator.language.toLowerCase();
  return navigatorLang.startsWith('it') ? 'it' : 'en';
}

export function getTranslation(key: string, locale: Locale) {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
