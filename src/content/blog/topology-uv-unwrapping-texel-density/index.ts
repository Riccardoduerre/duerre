import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Landscapes_00003.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Clean Topology and Texel Density: Foundations of Commercial 3D Assets",
    it: "Topologia pulita e densità texel: fondamenta degli asset 3D commerciali"
  } as LocaleStrings,
  date: '2026-03-23',
  image,
  excerpt: {
    en: "Why all-quad modeling prevents shading artifacts under subdivision, and how uniform texel density ensures sharp texture resolution.",
    it: "Perché la modellazione a soli quad previene artefatti di shading con la subdivision, e come una densità texel uniforme garantisce texture nitide."
  } as LocaleStrings
};
