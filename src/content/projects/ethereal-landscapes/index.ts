import type { PortfolioProject } from '../../../data/portfolio';
import landscapes01Img from '../../../assets/images/optimized/Landscapes_00001.webp';
const landscapes01 = typeof landscapes01Img === 'string' ? landscapes01Img : (landscapes01Img as any).src;
import landscapes02Img from '../../../assets/images/optimized/Landscapes_00002.webp';
const landscapes02 = typeof landscapes02Img === 'string' ? landscapes02Img : (landscapes02Img as any).src;
import landscapes03Img from '../../../assets/images/optimized/Landscapes_00003.webp';
const landscapes03 = typeof landscapes03Img === 'string' ? landscapes03Img : (landscapes03Img as any).src;

export const project: PortfolioProject = {
  id: 'ethereal-landscapes',
  category: 'photo',
  year: '2025',
  date: '2025-03-22',
  image: landscapes01,
  gallery: [landscapes01, landscapes02, landscapes03],
  title: { en: 'Ethereal Landscapes', it: 'Paesaggi Eterei' },
  client: { en: 'Dolomiti Tourism Board', it: 'Ente Turismo Dolomiti' },
  scope: { en: 'Landscape Art & Visual Exploration', it: 'Fotografia di Paesaggio e Direzione Artistica' },
  challenge: { en: 'A poetic visual series for off-season eco-tourism, with the aim of making distant peaks feel intimate and timeless.', it: 'Una serie poetica per il turismo eco fuori stagione, per far sentire le vette lontane intime e senza tempo.' },
  solution: { en: 'Remote dawn and twilight hikes, long exposures, and atmospheric gradients to preserve calm and drama in each frame.', it: 'Percorsi mattutini e crepuscolari in zone remote, lunghe esposizioni e sfumature atmosferiche per mantenere calma e dramma in ogni immagine.' },
  results: { en: '3M+ organic views and a 25% lift in eco-lodge reservations year-over-year.', it: 'Oltre 3 milioni di visualizzazioni organiche e un +25% nelle prenotazioni di eco-lodge rispetto all’anno precedente.' },
};
