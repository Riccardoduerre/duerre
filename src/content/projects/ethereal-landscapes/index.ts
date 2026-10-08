import { PortfolioProject } from '../../../data/portfolio';
const landscapes01 = new URL('../../../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;
const landscapes02 = new URL('../../../assets/images/optimized/Landscapes_00002.webp', import.meta.url).href;
const landscapes03 = new URL('../../../assets/images/optimized/Landscapes_00003.webp', import.meta.url).href;

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
