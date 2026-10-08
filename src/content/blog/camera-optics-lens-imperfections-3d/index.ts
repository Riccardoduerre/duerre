import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Giau_00006.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Overcoming the Sterile 3D Look: Emulating Physical Optical Imperfections",
    it: "Superare l’aspetto asettico del 3D: emulare le imperfezioni ottiche reali"
  } as LocaleStrings,
  date: '2026-05-04',
  image,
  excerpt: {
    en: "How subtle chromatic aberration, diffraction, optical vignetting, and sensor grain breathe tangible life into synthetic renders.",
    it: "Come aberrazione cromatica, diffrazione, vignettatura ottica e grana del sensore infondono vita tangibile nei render sintetici."
  } as LocaleStrings
};
