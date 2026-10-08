import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "The ACES Color Pipeline: Color Space Management for Commercial Films",
    it: "La pipeline colore ACES: gestione dello spazio colore per film commerciali"
  } as LocaleStrings,
  date: '2026-02-23',
  image,
  excerpt: {
    en: "Standardizing mixed camera sources into an unconstrained wide gamut workspace to maintain highlight integrity and smooth roll-off.",
    it: "Standardizzare sorgenti camera miste in uno spazio wide gamut non vincolato per mantenere l’integrità delle alte luci."
  } as LocaleStrings
};
