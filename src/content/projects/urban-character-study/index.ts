import type { PortfolioProject } from '../../../data/portfolio';
import portraits01Img from '../../../assets/images/optimized/_DSC2344.webp';
const portraits01 = typeof portraits01Img === 'string' ? portraits01Img : (portraits01Img as any).src;
import portraits02Img from '../../../assets/images/optimized/_DSC2365.webp';
const portraits02 = typeof portraits02Img === 'string' ? portraits02Img : (portraits02Img as any).src;
import portraitHeroImg from '../../../assets/images/optimized/DSCN7050.webp';
const portraitHero = typeof portraitHeroImg === 'string' ? portraitHeroImg : (portraitHeroImg as any).src;

export const project: PortfolioProject = {
  id: 'urban-character-study',
  category: 'photo',
  year: '2024',
  date: '2024-05-18',
  image: portraits01,
  gallery: [portraits01, portraits02, portraitHero],
  title: { en: 'Urban Character Study', it: 'Studio di Carattere Urbano' },
  client: { en: 'Studio Riva Editorial', it: 'Editoriale Studio Riva' },
  scope: { en: 'Portrait & Editorial Photography', it: 'Fotografia di Ritratto ed Editoriale' },
  challenge: { en: 'Create a portrait campaign that feels intimate and expressive while keeping the architectural environment present.', it: 'Creare una campagna di ritratti intima ed espressiva mantenendo presente l’ambiente architettonico.' },
  solution: { en: 'Low-key light, shallow depth-of-field, and tactile location choices to bring the subjects’ gaze forward without losing the mood of the street.', it: 'Luce bassa, profondità di campo ridotta e scelte di location pregne di texture per far emergere lo sguardo dei soggetti senza perdere l’umore della strada.' },
  results: { en: 'Featured in three major Italian photography publications and exhibited in Venice Modern Art Gallery.', it: 'Pubblicato in tre importanti riviste di fotografia italiane ed esposto nella galleria d’arte moderna di Venezia.' },
};
