import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Giau_00001.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Maximizing Dynamic Range: The ETTR Strategy in the Field",
    it: "Massimizzare la gamma dinamica: la strategia ETTR sul campo"
  } as LocaleStrings,
  date: '2026-08-24',
  image,
  excerpt: {
    en: "Pushing sensor exposure to the right to retain pristine shadow signal without sacrificing organic highlight roll-off.",
    it: "Spingere l’esposizione del sensore a destra per preservare il segnale nelle ombre senza sacrificare la transizione graduale delle alte luci."
  } as LocaleStrings
};
