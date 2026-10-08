import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Landscapes_00002.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Illuminating 3D Worlds: HDRIs Paired with Controlled Accent Lights",
    it: "Illuminare mondi 3D: HDRI abbinate a luci d’accento controllate"
  } as LocaleStrings,
  date: '2026-07-27',
  image,
  excerpt: {
    en: "Why relying solely on an environment map makes renders muddy, and how adding directional rim lights carves tangible volume.",
    it: "Perché affidarsi solo a un’environment map rende i render piatti, e come l’aggiunta di luci di contorno intaglia volumi tangibili."
  } as LocaleStrings
};
