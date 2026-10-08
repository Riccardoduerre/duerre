import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/_DSC2344.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Lighting Specular Surfaces: Scrims, Gradients and Reflection Control",
    it: "Illuminare superfici speculari: scrim, gradienti e controllo dei riflessi"
  } as LocaleStrings,
  date: '2026-03-09',
  image,
  excerpt: {
    en: "You don’t light metallic and glossy objects directly—you light the surfaces they reflect. Master large diffusion gradients.",
    it: "Gli oggetti metallici e lucidi non si illuminano direttamente: si illumina ciò che riflettono. Padroneggiare i gradienti di diffusione."
  } as LocaleStrings
};
