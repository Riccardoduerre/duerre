import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/_DSC2919.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Bump, Normal and Displacement: Choosing the Correct Depth Architecture",
    it: "Bump, Normal e Displacement: scegliere l’architettura corretta della profondità"
  } as LocaleStrings,
  date: '2026-06-15',
  image,
  excerpt: {
    en: "Balancing render memory and visual accuracy: when normal vectors suffice versus when micro-polygon tessellation is non-negotiable.",
    it: "Bilanciare memoria di calcolo e fedeltà visiva: quando i vettori normali bastano e quando la tassellazione geometrica è indispensabile."
  } as LocaleStrings
};
