import { LocaleStrings } from '../../../data/posts';
const image = new URL('../../../assets/images/optimized/Giau_00001.webp', import.meta.url).href;

export const meta = {
  title: {
    en: "Compositing Multipass Renders: Beauty Passes, AOVs and Cryptomatte",
    it: "Compositing di render multipass: Beauty pass, AOV e Cryptomatte"
  } as LocaleStrings,
  date: '2026-02-09',
  image,
  excerpt: {
    en: "Breaking down the CGI render equation into separate diffuse, specular, and emissive passes for surgical control in post.",
    it: "Scomporre l’equazione di rendering in pass separati di diffusione, riflessione ed emissione per un controllo chirurgico in post."
  } as LocaleStrings
};
