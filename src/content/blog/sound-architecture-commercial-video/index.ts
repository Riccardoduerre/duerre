import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/_DSC2919.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Audio Architecture: Sound Design, Foley and Dynamic Weight in Video",
    it: "Architettura sonora: sound design, foley e peso dinamico nel video"
  } as LocaleStrings,
  date: '2026-01-12',
  image,
  excerpt: {
    en: "Audiences forgive average image resolution, but they never forgive poor audio. How layered room tone and subtle foley elevate visual impact.",
    it: "Il pubblico perdona una risoluzione video modesta, ma non perdona mai un audio scadente. Come room tone stratificati e foley esaltano le immagini."
  } as LocaleStrings
};
