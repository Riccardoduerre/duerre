import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Landscapes_00003.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Understanding Light Quality: Direction, Softness and Falloff",
    it: "Comprendere la qualità della luce: direzione, morbidezza e caduta"
  } as LocaleStrings,
  date: '2026-10-05',
  image,
  excerpt: {
    en: "How relative source size, inverse-square falloff, and shadow transitions define the sculptural identity of your frames.",
    it: "Come la dimensione relativa della sorgente, la legge dell’inverso del quadrato e le transizioni d’ombra definiscono l’identità scultorea dello scatto."
  } as LocaleStrings
};
