const alps01 = new URL('../assets/images/Giau/Giau_00001.jpg', import.meta.url).href;
const alps02 = new URL('../assets/images/Giau/Giau_00002.jpg', import.meta.url).href;
const alps03 = new URL('../assets/images/Giau/Giau_00003.jpg', import.meta.url).href;
const alps04 = new URL('../assets/images/Giau/Giau_00004.jpg', import.meta.url).href;
const alpineGallery = new URL('../assets/images/Giau/Giau_00006.jpg', import.meta.url).href;
const landscapes01 = new URL('../assets/images/Landscapes/Landscapes_00001.jpg', import.meta.url).href;
const landscapes02 = new URL('../assets/images/Landscapes/Landscapes_00002.jpg', import.meta.url).href;
const landscapes03 = new URL('../assets/images/Landscapes/Landscapes_00003.jpg', import.meta.url).href;
const portraits01 = new URL('../assets/images/_DSC2344.jpg', import.meta.url).href;
const portraits02 = new URL('../assets/images/_DSC2365.jpg', import.meta.url).href;
const portraitHero = new URL('../assets/images/DSCN7050.JPG', import.meta.url).href;
const showreel = new URL('../assets/images/_RIK7376_HDR.jpg', import.meta.url).href;

export interface LocaleStrings {
  en: string;
  it: string;
}

export interface PortfolioProject {
  id: string;
  category: string;
  year: string;
  image: string;
  gallery: string[];
  title: LocaleStrings;
  client: LocaleStrings;
  scope: LocaleStrings;
  challenge: LocaleStrings;
  solution: LocaleStrings;
  results: LocaleStrings;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'alps-brand-campaign',
    category: 'Commercial',
    year: '2025',
    image: alpineGallery,
    gallery: [alps01, alps02, alps03, alps04],
    title: {
      en: 'Alps Brand Campaign',
      it: 'Campagna Alpina Alps',
    },
    client: {
      en: 'Alps Apparel Co.',
      it: 'Alps Apparel Co.',
    },
    scope: {
      en: 'Commercial Photography & Visual Strategy',
      it: 'Fotografia Commerciale e Direzione Visiva',
    },
    challenge: {
      en: 'Launching a winter collection with visuals that felt premium, technical, and emotionally durable.',
      it: 'Lanciare una collezione invernale con immagini premium, tecniche e resistenti dal punto di vista emotivo.',
    },
    solution: {
      en: 'A multi-day alpine shoot under demanding weather conditions, pairing sharp portraiture and action frames with cool-toned post-production.',
      it: 'Uno shooting alpino multi-giorno in condizioni atmosferiche impegnative, unendo ritratti nitidi e scatti d’azione con post-produzione a toni freddi.',
    },
    results: {
      en: '1.2M+ impressions and a 42% rise in catalog sales over the seasonal campaign window.',
      it: 'Oltre 1,2 milioni di impression e un +42% nelle vendite da catalogo durante la campagna stagionale.',
    },
  },
  {
    id: 'ethereal-landscapes',
    category: 'Editorial',
    year: '2025',
    image: landscapes01,
    gallery: [landscapes01, landscapes02, landscapes03],
    title: {
      en: 'Ethereal Landscapes',
      it: 'Paesaggi Eterei',
    },
    client: {
      en: 'Dolomiti Tourism Board',
      it: 'Ente Turismo Dolomiti',
    },
    scope: {
      en: 'Landscape Art & Visual Exploration',
      it: 'Fotografia di Paesaggio e Direzione Artistica',
    },
    challenge: {
      en: 'A poetic visual series for off-season eco-tourism, with the aim of making distant peaks feel intimate and timeless.',
      it: 'Una serie poetica per il turismo eco fuori stagione, per far sentire le vette lontane intime e senza tempo.',
    },
    solution: {
      en: 'Remote dawn and twilight hikes, long exposures, and atmospheric gradients to preserve calm and drama in each frame.',
      it: 'Percorsi mattutini e crepuscolari in zone remote, lunghe esposizioni e sfumature atmosferiche per mantenere calma e dramma in ogni immagine.',
    },
    results: {
      en: '3M+ organic views and a 25% lift in eco-lodge reservations year-over-year.',
      it: 'Oltre 3 milioni di visualizzazioni organiche e un +25% nelle prenotazioni di eco-lodge rispetto all’anno precedente.',
    },
  },
  {
    id: 'urban-character-study',
    category: 'Portraits',
    year: '2024',
    image: portraits01,
    gallery: [portraits01, portraits02, portraitHero],
    title: {
      en: 'Urban Character Study',
      it: 'Studio di Carattere Urbano',
    },
    client: {
      en: 'Studio Riva Editorial',
      it: 'Editoriale Studio Riva',
    },
    scope: {
      en: 'Portrait & Editorial Photography',
      it: 'Fotografia di Ritratto ed Editoriale',
    },
    challenge: {
      en: 'Create a portrait campaign that feels intimate and expressive while keeping the architectural environment present.',
      it: 'Creare una campagna di ritratti intima ed espressiva mantenendo presente l’ambiente architettonico.',
    },
    solution: {
      en: 'Low-key light, shallow depth-of-field, and tactile location choices to bring the subjects’ gaze forward without losing the mood of the street.',
      it: 'Luce bassa, profondità di campo ridotta e scelte di location pregne di texture per far emergere lo sguardo dei soggetti senza perdere l’umore della strada.',
    },
    results: {
      en: 'Featured in three major Italian photography publications and exhibited in Venice Modern Art Gallery.',
      it: 'Pubblicato in tre importanti riviste di fotografia italiane ed esposto nella galleria d’arte moderna di Venezia.',
    },
  },
  {
    id: 'commercial-showreel',
    category: 'Video',
    year: '2025',
    image: showreel,
    gallery: [showreel],
    title: {
      en: 'Commercial Showreel',
      it: 'Showreel Commerciale',
    },
    client: {
      en: 'Duerre Media Production',
      it: 'Duerre Media',
    },
    scope: {
      en: 'Video Production & Direction',
      it: 'Produzione e Regia Video',
    },
    challenge: {
      en: 'Condensing a wide range of brand work into cinematic short-form edits with strong pacing and emotional relevance.',
      it: 'Condensare una vasta gamma di lavori brand in edit brevi e cinematici con forte ritmo ed efficacia emotiva.',
    },
    solution: {
      en: 'Dynamic camera work, strong color grading, and custom sound design built to make every second feel premium and deliberate.',
      it: 'Movimenti di macchina dinamici, color grading marcato e sound design su misura per far sentire ogni secondo premium e intenzionale.',
    },
    results: {
      en: 'Multiple premium contracts secured across luxury and lifestyle sectors.',
      it: 'Diversi contratti premium ottenuti nel settore lusso e lifestyle.',
    },
  },
];

export default portfolioProjects;
