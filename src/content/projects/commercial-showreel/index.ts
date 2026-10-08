import type { PortfolioProject } from '../../../data/portfolio';
import showreelImg from '../../../assets/images/optimized/_RIK7376_HDR.webp';

const showreel = typeof showreelImg === 'string' ? showreelImg : (showreelImg as any).src;

export const project: PortfolioProject = {
  id: 'commercial-showreel',
  category: 'video',
  featured: true,
  year: '2025',
  date: '2025-11-01',
  image: showreel,
  gallery: [showreel],
  title: { en: 'Commercial Showreel', it: 'Showreel Commerciale' },
  client: { en: 'Duerre Media Production', it: 'Duerre Media' },
  scope: { en: 'Video Production & Direction', it: 'Produzione e Regia Video' },
  challenge: { en: 'Condensing a wide range of brand work into cinematic short-form edits with strong pacing and emotional relevance.', it: 'Condensare una vasta gamma di lavori brand in edit brevi e cinematici con forte ritmo ed efficacia emotiva.' },
  solution: { en: 'Dynamic camera work, strong color grading, and custom sound design built to make every second feel premium and deliberate.', it: 'Movimenti di macchina dinamici, color grading marcato e sound design su misura per far sentire ogni secondo premium e intenzionale.' },
  results: { en: 'Multiple premium contracts secured across luxury and lifestyle sectors.', it: 'Diversi contratti premium ottenuti nel settore lusso e lifestyle.' },
};
