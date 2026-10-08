import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/_DSC2344.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Exposing Log Curves and RAW Video: The False Color Method",
    it: "Esporre curve Log e video RAW: il metodo dei False Color"
  } as LocaleStrings,
  date: '2026-08-10',
  image,
  excerpt: {
    en: "Stop guessing on flat monitor profiles. How middle grey IRE mapping guarantees clean shadow recovery and rich skin tones.",
    it: "Smettere di tirare a indovinare sui profili flat. Come mappare il grigio medio a IRE specifici garantisce ombre pulite e toni pelle ricchi."
  } as LocaleStrings
};
