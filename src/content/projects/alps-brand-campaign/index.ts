import type { PortfolioProject } from '../../../data/portfolio';
import alpineGalleryImg from '../../../assets/images/optimized/Giau_00006.webp';
const alpineGallery = typeof alpineGalleryImg === 'string' ? alpineGalleryImg : (alpineGalleryImg as any).src;
import alps01Img from '../../../assets/images/optimized/Giau_00001.webp';
const alps01 = typeof alps01Img === 'string' ? alps01Img : (alps01Img as any).src;
import alps02Img from '../../../assets/images/optimized/Giau_00002.webp';
const alps02 = typeof alps02Img === 'string' ? alps02Img : (alps02Img as any).src;
import alps03Img from '../../../assets/images/optimized/Giau_00003.webp';
const alps03 = typeof alps03Img === 'string' ? alps03Img : (alps03Img as any).src;
import alps04Img from '../../../assets/images/optimized/Giau_00004.webp';
const alps04 = typeof alps04Img === 'string' ? alps04Img : (alps04Img as any).src;

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
