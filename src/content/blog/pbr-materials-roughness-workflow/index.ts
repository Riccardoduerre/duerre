import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Giau_00004.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Physically Based Rendering: Mastering the Roughness-Metallic Pipeline",
    it: "Physically Based Rendering: padroneggiare la pipeline Roughness-Metallic"
  } as LocaleStrings,
  date: '2026-09-07',
  image,
  excerpt: {
    en: "Demystifying microfacet theory, dielectric Fresnel reflectance, and why roughness maps are the authentic soul of 3D realism.",
    it: "Demistificare la microfacet theory, la riflettanza dielettrica di Fresnel e perché le mappe di roughness sono la vera anima del realismo 3D."
  } as LocaleStrings
};
