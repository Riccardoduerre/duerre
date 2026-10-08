import { PortfolioProject } from '../../../data/portfolio';
const alpineGallery = new URL('../../../assets/images/optimized/Giau_00006.webp', import.meta.url).href;
const alps01 = new URL('../../../assets/images/optimized/Giau_00001.webp', import.meta.url).href;
const alps02 = new URL('../../../assets/images/optimized/Giau_00002.webp', import.meta.url).href;
const alps03 = new URL('../../../assets/images/optimized/Giau_00003.webp', import.meta.url).href;
const alps04 = new URL('../../../assets/images/optimized/Giau_00004.webp', import.meta.url).href;

export const project: PortfolioProject = {
  id: 'alps-brand-campaign',
  category: 'photo',
  featured: true,
  year: '2025',
  date: '2025-07-15',
  image: alpineGallery,
  gallery: [alps01, alps02, alps03, alps04],
  title: { en: 'Alps Brand Campaign', it: 'Campagna Alpina Alps' },
  client: { en: 'Alps Apparel Co.', it: 'Alps Apparel Co.' },
  scope: { en: 'Commercial Photography & Visual Strategy', it: 'Fotografia Commerciale e Direzione Visiva' },
  challenge: { en: 'Launching a winter collection with visuals that felt premium, technical, and emotionally durable.', it: 'Lanciare una collezione invernale con immagini premium, tecniche e resistenti dal punto di vista emotivo.' },
  solution: { en: 'A multi-day alpine shoot under demanding weather conditions, pairing sharp portraiture and action frames with cool-toned post-production.', it: 'Uno shooting alpino multi-giorno in condizioni atmosferiche impegnative, unendo ritratti nitidi e scatti d’azione con post-produzione a toni freddi.' },
  results: { en: '1.2M+ impressions and a 42% rise in catalog sales over the seasonal campaign window.', it: 'Oltre 1,2 milioni di impression e un +42% nelle vendite da catalogo durante la campagna stagionale.' },
};
