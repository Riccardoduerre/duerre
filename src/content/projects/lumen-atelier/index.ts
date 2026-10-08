import type { PortfolioProject } from '../../../data/portfolio';
const showreel = new URL('../../../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;
const portraits01 = new URL('../../../assets/images/optimized/_DSC2344.webp', import.meta.url).href;
const landscapes01 = new URL('../../../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;

export const project: PortfolioProject = {
  id: 'lumen-atelier',
  category: '3d',
  featured: true,
  year: '2024',
  date: '2024-10-10',
  image: showreel,
  gallery: [showreel, portraits01, landscapes01],
  title: { en: 'Lumen Atelier', it: 'Lumen Atelier' },
  client: { en: 'Maison Lumen', it: 'Maison Lumen' },
  scope: { en: '3D Visual Direction & Product Storytelling', it: 'Direzione visiva 3D e storytelling del prodotto' },
  challenge: { en: 'Elevating a premium product range into an immersive digital world without losing the tactile precision of the objects.', it: 'Trasformare una gamma premium in un mondo digitale immersivo senza perdere la precisione tattile degli oggetti.' },
  solution: { en: 'A cinematic set design approach combining soft lighting, atmospheric depth, and motion-aware composition to heighten material perception.', it: 'Un approccio di set design cinematografico con luce morbida, profondità atmosferica e composizione in movimento per valorizzare la percezione del materiale.' },
  results: { en: 'Used across launch assets, social execution, and retail digital touchpoints with strong engagement and premium positioning.', it: 'Utilizzato per asset di lancio, contenuti social e touchpoint retail digitali con forte engagement e posizionamento premium.' },
};
