const alps01 = new URL('../assets/images/optimized/Giau_00001.webp', import.meta.url).href;
const alps02 = new URL('../assets/images/optimized/Giau_00002.webp', import.meta.url).href;
const alps03 = new URL('../assets/images/optimized/Giau_00003.webp', import.meta.url).href;
const alps04 = new URL('../assets/images/optimized/Giau_00004.webp', import.meta.url).href;
const alpineGallery = new URL('../assets/images/optimized/Giau_00006.webp', import.meta.url).href;
const landscapes01 = new URL('../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;
const landscapes02 = new URL('../assets/images/optimized/Landscapes_00002.webp', import.meta.url).href;
const landscapes03 = new URL('../assets/images/optimized/Landscapes_00003.webp', import.meta.url).href;
const portraits01 = new URL('../assets/images/optimized/_DSC2344.webp', import.meta.url).href;
const portraits02 = new URL('../assets/images/optimized/_DSC2365.webp', import.meta.url).href;
const portraitHero = new URL('../assets/images/optimized/DSCN7050.webp', import.meta.url).href;
const showreel = new URL('../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;

export interface LocaleStrings {
  en: string;
  it: string;
}

export type PortfolioCategory = 'photo' | 'video' | '3d';

export interface PortfolioProject {
  id: string;
  category: PortfolioCategory;
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

export interface CategoryDefinition {
  id: PortfolioCategory;
  label: LocaleStrings;
  eyebrow: LocaleStrings;
  headline: LocaleStrings;
  description: LocaleStrings;
  featureList: LocaleStrings[];
  tags: LocaleStrings[];
}

export const portfolioCategoryMeta: Record<PortfolioCategory, CategoryDefinition> = {
  photo: {
    id: 'photo',
    label: { en: 'Photography', it: 'Fotografia' },
    eyebrow: { en: 'Photo studio', it: 'Studio fotografico' },
    headline: { en: 'Commercial photography', it: 'Fotografia commerciale' },
    description: {
      en: 'Editorial campaigns, portraiture, product storytelling, and location-led imagery for premium brands.',
      it: 'Campagne editoriali, ritratti, storytelling di prodotto e immagini in location per brand premium.',
    },
    featureList: [
      { en: 'Luxury product imagery', it: 'Immagini di prodotto premium' },
      { en: 'Portrait-led campaigns', it: 'Campagne con ritratto' },
      { en: 'Atmospheric location work', it: 'Lavoro in location atmosferiche' },
    ],
    tags: [
      { en: 'Campaign stills', it: 'Still di campagna' },
      { en: 'Editorial', it: 'Editoriale' },
      { en: 'Portraiture', it: 'Ritratti' },
    ],
  },
  video: {
    id: 'video',
    label: { en: 'Video', it: 'Video' },
    eyebrow: { en: 'Video direction', it: 'Direzione video' },
    headline: { en: 'Cinematic video production', it: 'Produzione video cinematografica' },
    description: {
      en: 'Short-form commercial edits, motion-led brand stories, and polished reels designed to feel premium and intentional.',
      it: 'Montaggi commerciali brevi, brand stories in movimento e reel accurati pensati per risultare premium e intenzionali.',
    },
    featureList: [
      { en: 'Brand story editing', it: 'Montaggio di brand story' },
      { en: 'Motion-led campaigns', it: 'Campagne in movimento' },
      { en: 'Commercial reel production', it: 'Produzione di reel commerciali' },
    ],
    tags: [
      { en: 'Commercial', it: 'Commerciale' },
      { en: 'Direction', it: 'Regia' },
      { en: 'Post-production', it: 'Post-produzione' },
    ],
  },
  '3d': {
    id: '3d',
    label: { en: '3D', it: '3D' },
    eyebrow: { en: '3D studio', it: 'Studio 3D' },
    headline: { en: 'Immersive 3D content', it: 'Contenuti 3D immersivi' },
    description: {
      en: 'Product stories, stand-alone environments, and digital scenes built to feel cinematic, tactile, and undeniably premium.',
      it: 'Storytelling di prodotto, ambientazioni autonome e scene digitali costruite per essere cinematiche, tattili e premium.',
    },
    featureList: [
      { en: 'Luxury product storytelling', it: 'Storytelling di prodotto premium' },
      { en: 'Immersive motion-led campaigns', it: 'Campagne immersive in movimento' },
      { en: 'Cinematic 3D environments', it: 'Ambientazioni 3D cinematografiche' },
    ],
    tags: [
      { en: 'Product', it: 'Prodotto' },
      { en: 'Atmosphere', it: 'Atmosfera' },
      { en: 'Motion', it: 'Motion' },
    ],
  },
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'alps-brand-campaign',
    category: 'photo',
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
    category: 'photo',
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
    category: 'photo',
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
    category: 'video',
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
  {
    id: 'lumen-atelier',
    category: '3d',
    year: '2024',
    image: showreel,
    gallery: [showreel, portraits01, landscapes01],
    title: {
      en: 'Lumen Atelier',
      it: 'Lumen Atelier',
    },
    client: {
      en: 'Maison Lumen',
      it: 'Maison Lumen',
    },
    scope: {
      en: '3D Visual Direction & Product Storytelling',
      it: 'Direzione visiva 3D e storytelling del prodotto',
    },
    challenge: {
      en: 'Elevating a premium product range into an immersive digital world without losing the tactile precision of the objects.',
      it: 'Trasformare una gamma premium in un mondo digitale immersivo senza perdere la precisione tattile degli oggetti.',
    },
    solution: {
      en: 'A cinematic set design approach combining soft lighting, atmospheric depth, and motion-aware composition to heighten material perception.',
      it: 'Un approccio di set design cinematografico con luce morbida, profondità atmosferica e composizione in movimento per valorizzare la percezione del materiale.',
    },
    results: {
      en: 'Used across launch assets, social execution, and retail digital touchpoints with strong engagement and premium positioning.',
      it: 'Utilizzato per asset di lancio, contenuti social e touchpoint retail digitali con forte engagement e posizionamento premium.',
    },
  },
];

export function addPortfolioProject(project: PortfolioProject) {
  portfolioProjects.push(project);
  return portfolioProjects.length;
}

export default portfolioProjects;
