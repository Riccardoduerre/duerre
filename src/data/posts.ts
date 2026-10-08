// Auto-generated blog posts with full Italian and English content
import understandingLightQualityEn from '../content/blog/understanding-light-quality.en.md?raw';
import understandingLightQualityIt from '../content/blog/understanding-light-quality.it.md?raw';
import post_180DegreeShutterRuleEn from '../content/blog/180-degree-shutter-rule.en.md?raw';
import post_180DegreeShutterRuleIt from '../content/blog/180-degree-shutter-rule.it.md?raw';
import pbrMaterialsRoughnessWorkflowEn from '../content/blog/pbr-materials-roughness-workflow.en.md?raw';
import pbrMaterialsRoughnessWorkflowIt from '../content/blog/pbr-materials-roughness-workflow.it.md?raw';
import dynamicRangeAndEttrEn from '../content/blog/dynamic-range-and-ettr.en.md?raw';
import dynamicRangeAndEttrIt from '../content/blog/dynamic-range-and-ettr.it.md?raw';
import logProfilesRawVideoExposureEn from '../content/blog/log-profiles-raw-video-exposure.en.md?raw';
import logProfilesRawVideoExposureIt from '../content/blog/log-profiles-raw-video-exposure.it.md?raw';
import hdriStudioLightingInCgiEn from '../content/blog/hdri-studio-lighting-in-cgi.en.md?raw';
import hdriStudioLightingInCgiIt from '../content/blog/hdri-studio-lighting-in-cgi.it.md?raw';
import focalLengthsSpatialCompressionEn from '../content/blog/focal-lengths-spatial-compression.en.md?raw';
import focalLengthsSpatialCompressionIt from '../content/blog/focal-lengths-spatial-compression.it.md?raw';
import motivatedCameraMovementEn from '../content/blog/motivated-camera-movement.en.md?raw';
import motivatedCameraMovementIt from '../content/blog/motivated-camera-movement.it.md?raw';
import normalVsDisplacementDepthEn from '../content/blog/normal-vs-displacement-depth.en.md?raw';
import normalVsDisplacementDepthIt from '../content/blog/normal-vs-displacement-depth.it.md?raw';
import negativeFillNaturalLightEn from '../content/blog/negative-fill-natural-light.en.md?raw';
import negativeFillNaturalLightIt from '../content/blog/negative-fill-natural-light.it.md?raw';
import cinematicContrastRatiosEn from '../content/blog/cinematic-contrast-ratios.en.md?raw';
import cinematicContrastRatiosIt from '../content/blog/cinematic-contrast-ratios.it.md?raw';
import cameraOpticsLensImperfections3dEn from '../content/blog/camera-optics-lens-imperfections-3d.en.md?raw';
import cameraOpticsLensImperfections3dIt from '../content/blog/camera-optics-lens-imperfections-3d.it.md?raw';
import colorHarmonyDualToneGradingEn from '../content/blog/color-harmony-dual-tone-grading.en.md?raw';
import colorHarmonyDualToneGradingIt from '../content/blog/color-harmony-dual-tone-grading.it.md?raw';
import bRollStorytellingBrandFilmsEn from '../content/blog/b-roll-storytelling-brand-films.en.md?raw';
import bRollStorytellingBrandFilmsIt from '../content/blog/b-roll-storytelling-brand-films.it.md?raw';
import topologyUvUnwrappingTexelDensityEn from '../content/blog/topology-uv-unwrapping-texel-density.en.md?raw';
import topologyUvUnwrappingTexelDensityIt from '../content/blog/topology-uv-unwrapping-texel-density.it.md?raw';
import commercialProductSpecularHighlightsEn from '../content/blog/commercial-product-specular-highlights.en.md?raw';
import commercialProductSpecularHighlightsIt from '../content/blog/commercial-product-specular-highlights.it.md?raw';
import colorGradingAcesPipelineEn from '../content/blog/color-grading-aces-pipeline.en.md?raw';
import colorGradingAcesPipelineIt from '../content/blog/color-grading-aces-pipeline.it.md?raw';
import compositingMultipassRendersAovEn from '../content/blog/compositing-multipass-renders-aov.en.md?raw';
import compositingMultipassRendersAovIt from '../content/blog/compositing-multipass-renders-aov.it.md?raw';
import editorialNarrativePacingEn from '../content/blog/editorial-narrative-pacing.en.md?raw';
import editorialNarrativePacingIt from '../content/blog/editorial-narrative-pacing.it.md?raw';
import soundArchitectureCommercialVideoEn from '../content/blog/sound-architecture-commercial-video.en.md?raw';
import soundArchitectureCommercialVideoIt from '../content/blog/sound-architecture-commercial-video.it.md?raw';

export type LocaleStrings = Record<'en' | 'it', string>;

export interface BlogPostData {
  slug: string;
  aliases?: string[];
  title: LocaleStrings;
  date: string;
  image: string;
  excerpt: LocaleStrings;
  content: LocaleStrings;
}

const img_Landscapes_00003_webp = new URL('../assets/images/optimized/Landscapes_00003.webp', import.meta.url).href;
const img__RIK7376_HDR_webp = new URL('../assets/images/optimized/_RIK7376_HDR.webp', import.meta.url).href;
const img_Giau_00004_webp = new URL('../assets/images/optimized/Giau_00004.webp', import.meta.url).href;
const img_Giau_00001_webp = new URL('../assets/images/optimized/Giau_00001.webp', import.meta.url).href;
const img__DSC2344_webp = new URL('../assets/images/optimized/_DSC2344.webp', import.meta.url).href;
const img_Landscapes_00002_webp = new URL('../assets/images/optimized/Landscapes_00002.webp', import.meta.url).href;
const img_Landscapes_00001_webp = new URL('../assets/images/optimized/Landscapes_00001.webp', import.meta.url).href;
const img_Giau_00003_webp = new URL('../assets/images/optimized/Giau_00003.webp', import.meta.url).href;
const img__DSC2919_webp = new URL('../assets/images/optimized/_DSC2919.webp', import.meta.url).href;
const img__DSC2365_webp = new URL('../assets/images/optimized/_DSC2365.webp', import.meta.url).href;
const img_DSCN7050_webp = new URL('../assets/images/optimized/DSCN7050.webp', import.meta.url).href;
const img_Giau_00006_webp = new URL('../assets/images/optimized/Giau_00006.webp', import.meta.url).href;
const img_Giau_00002_webp = new URL('../assets/images/optimized/Giau_00002.webp', import.meta.url).href;

export function sortPostsByDateDesc(postList: BlogPostData[]): BlogPostData[] {
  return [...postList].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    if (!isNaN(timeA) && !isNaN(timeB) && timeA !== timeB) {
      return timeB - timeA;
    }
    return b.date.localeCompare(a.date);
  });
}

const rawPosts: BlogPostData[] = [
  {
    slug: 'understanding-light-quality',
    aliases: ["post2"],
    title: {
      en: "Understanding Light Quality: Direction, Softness and Falloff",
      it: "Comprendere la qualità della luce: direzione, morbidezza e caduta",
    },
    date: '2026-10-05',
    image: img_Landscapes_00003_webp,
    excerpt: {
      en: "How relative source size, inverse-square falloff, and shadow transitions define the sculptural identity of your frames.",
      it: "Come la dimensione relativa della sorgente, la legge dell’inverso del quadrato e le transizioni d’ombra definiscono l’identità scultorea dello scatto.",
    },
    content: {
      en: understandingLightQualityEn,
      it: understandingLightQualityIt,
    },
  },
  {
    slug: '180-degree-shutter-rule',
    title: {
      en: "The 180-Degree Shutter Rule and Natural Motion Blur",
      it: "La regola dei 180 gradi dell’otturatore e il motion blur naturale",
    },
    date: '2026-09-21',
    image: img__RIK7376_HDR_webp,
    excerpt: {
      en: "Why timing exposure to double the frame rate creates organic cinematic cadence, and when deliberate rule-breaking serves the narrative.",
      it: "Perché sincronizzare l’esposizione al doppio del frame rate crea cadenza cinematografica organica, e quando infrangere la regola serve alla narrazione.",
    },
    content: {
      en: post_180DegreeShutterRuleEn,
      it: post_180DegreeShutterRuleIt,
    },
  },
  {
    slug: 'pbr-materials-roughness-workflow',
    title: {
      en: "Physically Based Rendering: Mastering the Roughness-Metallic Pipeline",
      it: "Physically Based Rendering: padroneggiare la pipeline Roughness-Metallic",
    },
    date: '2026-09-07',
    image: img_Giau_00004_webp,
    excerpt: {
      en: "Demystifying microfacet theory, dielectric Fresnel reflectance, and why roughness maps are the authentic soul of 3D realism.",
      it: "Demistificare la microfacet theory, la riflettanza dielettrica di Fresnel e perché le mappe di roughness sono la vera anima del realismo 3D.",
    },
    content: {
      en: pbrMaterialsRoughnessWorkflowEn,
      it: pbrMaterialsRoughnessWorkflowIt,
    },
  },
  {
    slug: 'dynamic-range-and-ettr',
    title: {
      en: "Maximizing Dynamic Range: The ETTR Strategy in the Field",
      it: "Massimizzare la gamma dinamica: la strategia ETTR sul campo",
    },
    date: '2026-08-24',
    image: img_Giau_00001_webp,
    excerpt: {
      en: "Pushing sensor exposure to the right to retain pristine shadow signal without sacrificing organic highlight roll-off.",
      it: "Spingere l’esposizione del sensore a destra per preservare il segnale nelle ombre senza sacrificare la transizione graduale delle alte luci.",
    },
    content: {
      en: dynamicRangeAndEttrEn,
      it: dynamicRangeAndEttrIt,
    },
  },
  {
    slug: 'log-profiles-raw-video-exposure',
    title: {
      en: "Exposing Log Curves and RAW Video: The False Color Method",
      it: "Esporre curve Log e video RAW: il metodo dei False Color",
    },
    date: '2026-08-10',
    image: img__DSC2344_webp,
    excerpt: {
      en: "Stop guessing on flat monitor profiles. How middle grey IRE mapping guarantees clean shadow recovery and rich skin tones.",
      it: "Smettere di tirare a indovinare sui profili flat. Come mappare il grigio medio a IRE specifici garantisce ombre pulite e toni pelle ricchi.",
    },
    content: {
      en: logProfilesRawVideoExposureEn,
      it: logProfilesRawVideoExposureIt,
    },
  },
  {
    slug: 'hdri-studio-lighting-in-cgi',
    title: {
      en: "Illuminating 3D Worlds: HDRIs Paired with Controlled Accent Lights",
      it: "Illuminare mondi 3D: HDRI abbinate a luci d’accento controllate",
    },
    date: '2026-07-27',
    image: img_Landscapes_00002_webp,
    excerpt: {
      en: "Why relying solely on an environment map makes renders muddy, and how adding directional rim lights carves tangible volume.",
      it: "Perché affidarsi solo a un’environment map rende i render piatti, e come l’aggiunta di luci di contorno intaglia volumi tangibili.",
    },
    content: {
      en: hdriStudioLightingInCgiEn,
      it: hdriStudioLightingInCgiIt,
    },
  },
  {
    slug: 'focal-lengths-spatial-compression',
    title: {
      en: "Focal Lengths and Spatial Compression: Beyond Field of View",
      it: "Lunghezze focali e compressione spaziale: oltre l’angolo di campo",
    },
    date: '2026-07-13',
    image: img_Landscapes_00001_webp,
    excerpt: {
      en: "How camera-to-subject distance alters perspective geometry and why a 24mm feels intimate while an 85mm isolates prestige.",
      it: "Come la distanza tra camera e soggetto altera la geometria prospettica e perché un 24mm appare intimo mentre un 85mm isola il prestigio.",
    },
    content: {
      en: focalLengthsSpatialCompressionEn,
      it: focalLengthsSpatialCompressionIt,
    },
  },
  {
    slug: 'motivated-camera-movement',
    title: {
      en: "Motivated Camera Movement: Parallax, Pacing and Kinetic Intent",
      it: "Movimento di macchina motivato: parallasse, ritmo e intenzione cinetica",
    },
    date: '2026-06-29',
    image: img_Giau_00003_webp,
    excerpt: {
      en: "Ditching arbitrary camera moves for intentional blocking where foreground parallax accentuates subject psychology.",
      it: "Abbandonare movimenti di camera arbitrari per un blocking intenzionale dove la parallasse enfatizza la psicologia del soggetto.",
    },
    content: {
      en: motivatedCameraMovementEn,
      it: motivatedCameraMovementIt,
    },
  },
  {
    slug: 'normal-vs-displacement-depth',
    title: {
      en: "Bump, Normal and Displacement: Choosing the Correct Depth Architecture",
      it: "Bump, Normal e Displacement: scegliere l’architettura corretta della profondità",
    },
    date: '2026-06-15',
    image: img__DSC2919_webp,
    excerpt: {
      en: "Balancing render memory and visual accuracy: when normal vectors suffice versus when micro-polygon tessellation is non-negotiable.",
      it: "Bilanciare memoria di calcolo e fedeltà visiva: quando i vettori normali bastano e quando la tassellazione geometrica è indispensabile.",
    },
    content: {
      en: normalVsDisplacementDepthEn,
      it: normalVsDisplacementDepthIt,
    },
  },
  {
    slug: 'negative-fill-natural-light',
    title: {
      en: "The Power of Negative Fill: Subtracting Light to Build Contrast",
      it: "Il potere del negative fill: sottrarre luce per costruire contrasto",
    },
    date: '2026-06-01',
    image: img__DSC2365_webp,
    excerpt: {
      en: "Why great photographers bring black solids rather than silver reflectors to overcast outdoor commercial shoots.",
      it: "Perché i migliori fotografi portano pannelli neri invece di riflettori argentati negli shooting commerciali all’aperto con cielo coperto.",
    },
    content: {
      en: negativeFillNaturalLightEn,
      it: negativeFillNaturalLightIt,
    },
  },
  {
    slug: 'cinematic-contrast-ratios',
    title: {
      en: "Key-to-Fill Contrast Ratios: Designing Emotional Light in Video",
      it: "Rapporti di contrasto Key-to-Fill: disegnare la luce emotiva nel video",
    },
    date: '2026-05-18',
    image: img_DSCN7050_webp,
    excerpt: {
      en: "Transitioning from flat corporate 2:1 lighting to dramatic 8:1 cinematic ratios using book lights and ambient feathering.",
      it: "Passare da un’illuminazione piatta 2:1 a rapporti cinematografici 8:1 usando book light e sfumature ambientali controllate.",
    },
    content: {
      en: cinematicContrastRatiosEn,
      it: cinematicContrastRatiosIt,
    },
  },
  {
    slug: 'camera-optics-lens-imperfections-3d',
    title: {
      en: "Overcoming the Sterile 3D Look: Emulating Physical Optical Imperfections",
      it: "Superare l’aspetto asettico del 3D: emulare le imperfezioni ottiche reali",
    },
    date: '2026-05-04',
    image: img_Giau_00006_webp,
    excerpt: {
      en: "How subtle chromatic aberration, diffraction, optical vignetting, and sensor grain breathe tangible life into synthetic renders.",
      it: "Come aberrazione cromatica, diffrazione, vignettatura ottica e grana del sensore infondono vita tangibile nei render sintetici.",
    },
    content: {
      en: cameraOpticsLensImperfections3dEn,
      it: cameraOpticsLensImperfections3dIt,
    },
  },
  {
    slug: 'color-harmony-dual-tone-grading',
    title: {
      en: "Color Harmony and Split Toning: Creating Cohesive Visual Palettes",
      it: "Armonia cromatica e split toning: creare palette visive coerenti",
    },
    date: '2026-04-20',
    image: img_Giau_00002_webp,
    excerpt: {
      en: "Implementing complementary color theory across highlights and shadows while rigorously protecting authentic human skin tones.",
      it: "Applicare la teoria dei colori complementari su luci e ombre proteggendo rigorosamente i toni autentici dell’incarnato.",
    },
    content: {
      en: colorHarmonyDualToneGradingEn,
      it: colorHarmonyDualToneGradingIt,
    },
  },
  {
    slug: 'b-roll-storytelling-brand-films',
    title: {
      en: "Elevating B-Roll: Transforming Cutaways into Narrative Pillars",
      it: "Elevare il B-Roll: trasformare le coperture in pilastri narrativi",
    },
    date: '2026-04-06',
    image: img__RIK7376_HDR_webp,
    excerpt: {
      en: "Moving away from visual filler: how tactile textures, deliberate match cuts, and atmospheric details deepen commercial pacing.",
      it: "Allontanarsi dai riempitivi visivi: come texture tattili, match cut deliberati e dettagli d’atmosfera approfondiscono il ritmo dello spot.",
    },
    content: {
      en: bRollStorytellingBrandFilmsEn,
      it: bRollStorytellingBrandFilmsIt,
    },
  },
  {
    slug: 'topology-uv-unwrapping-texel-density',
    title: {
      en: "Clean Topology and Texel Density: Foundations of Commercial 3D Assets",
      it: "Topologia pulita e densità texel: fondamenta degli asset 3D commerciali",
    },
    date: '2026-03-23',
    image: img_Landscapes_00003_webp,
    excerpt: {
      en: "Why all-quad modeling prevents shading artifacts under subdivision, and how uniform texel density ensures sharp texture resolution.",
      it: "Perché la modellazione a soli quad previene artefatti di shading con la subdivision, e come una densità texel uniforme garantisce texture nitide.",
    },
    content: {
      en: topologyUvUnwrappingTexelDensityEn,
      it: topologyUvUnwrappingTexelDensityIt,
    },
  },
  {
    slug: 'commercial-product-specular-highlights',
    title: {
      en: "Lighting Specular Surfaces: Scrims, Gradients and Reflection Control",
      it: "Illuminare superfici speculari: scrim, gradienti e controllo dei riflessi",
    },
    date: '2026-03-09',
    image: img__DSC2344_webp,
    excerpt: {
      en: "You don’t light metallic and glossy objects directly—you light the surfaces they reflect. Master large diffusion gradients.",
      it: "Gli oggetti metallici e lucidi non si illuminano direttamente: si illumina ciò che riflettono. Padroneggiare i gradienti di diffusione.",
    },
    content: {
      en: commercialProductSpecularHighlightsEn,
      it: commercialProductSpecularHighlightsIt,
    },
  },
  {
    slug: 'color-grading-aces-pipeline',
    title: {
      en: "The ACES Color Pipeline: Color Space Management for Commercial Films",
      it: "La pipeline colore ACES: gestione dello spazio colore per film commerciali",
    },
    date: '2026-02-23',
    image: img_Landscapes_00001_webp,
    excerpt: {
      en: "Standardizing mixed camera sources into an unconstrained wide gamut workspace to maintain highlight integrity and smooth roll-off.",
      it: "Standardizzare sorgenti camera miste in uno spazio wide gamut non vincolato per mantenere l’integrità delle alte luci.",
    },
    content: {
      en: colorGradingAcesPipelineEn,
      it: colorGradingAcesPipelineIt,
    },
  },
  {
    slug: 'compositing-multipass-renders-aov',
    title: {
      en: "Compositing Multipass Renders: Beauty Passes, AOVs and Cryptomatte",
      it: "Compositing di render multipass: Beauty pass, AOV e Cryptomatte",
    },
    date: '2026-02-09',
    image: img_Giau_00001_webp,
    excerpt: {
      en: "Breaking down the CGI render equation into separate diffuse, specular, and emissive passes for surgical control in post.",
      it: "Scomporre l’equazione di rendering in pass separati di diffusione, riflessione ed emissione per un controllo chirurgico in post.",
    },
    content: {
      en: compositingMultipassRendersAovEn,
      it: compositingMultipassRendersAovIt,
    },
  },
  {
    slug: 'editorial-narrative-pacing',
    aliases: ["post1"],
    title: {
      en: "Editorial Pacing: Sequencing Still Frames for Lasting Brand Impact",
      it: "Ritmo editoriale: sequenziare le immagini per un impatto duraturo del brand",
    },
    date: '2026-01-26',
    image: img_DSCN7050_webp,
    excerpt: {
      en: "How pairing wide atmospheric scenes with intimate macro details creates a visual cadence that guides the viewer’s eye through a campaign.",
      it: "Come abbinare ampie scene d’atmosfera a dettagli macro intimi crea una cadenza visiva che guida lo sguardo dello spettatore attraverso la campagna.",
    },
    content: {
      en: editorialNarrativePacingEn,
      it: editorialNarrativePacingIt,
    },
  },
  {
    slug: 'sound-architecture-commercial-video',
    title: {
      en: "Audio Architecture: Sound Design, Foley and Dynamic Weight in Video",
      it: "Architettura sonora: sound design, foley e peso dinamico nel video",
    },
    date: '2026-01-12',
    image: img__DSC2919_webp,
    excerpt: {
      en: "Audiences forgive average image resolution, but they never forgive poor audio. How layered room tone and subtle foley elevate visual impact.",
      it: "Il pubblico perdona una risoluzione video modesta, ma non perdona mai un audio scadente. Come room tone stratificati e foley esaltano le immagini.",
    },
    content: {
      en: soundArchitectureCommercialVideoEn,
      it: soundArchitectureCommercialVideoIt,
    },
  },
];

export const posts: BlogPostData[] = sortPostsByDateDesc(rawPosts);

export { formatBlogDate } from '../lib/date';

export default posts;
