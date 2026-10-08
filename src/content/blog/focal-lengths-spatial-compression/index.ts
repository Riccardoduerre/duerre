import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Focal Lengths and Spatial Compression: Beyond Field of View",
    it: "Lunghezze focali e compressione spaziale: oltre l’angolo di campo"
  } as LocaleStrings,
  date: '2026-07-13',
  image,
  excerpt: {
    en: "How camera-to-subject distance alters perspective geometry and why a 24mm feels intimate while an 85mm isolates prestige.",
    it: "Come la distanza tra camera e soggetto altera la geometria prospettica e perché un 24mm appare intimo mentre un 85mm isola il prestigio."
  } as LocaleStrings
};
