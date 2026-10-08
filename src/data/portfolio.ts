export interface LocaleStrings {
  en: string;
  it: string;
}

export type PortfolioCategory = 'photo' | 'video' | '3d';

export interface PortfolioProject {
  id: string;
  category: PortfolioCategory;
  featured?: boolean;
  year: string;
  date?: string; // Format: 'YYYY-MM-DD' or 'YYYY-MM' for exact chronological ordering
  image: string;
  gallery: string[];
  title: LocaleStrings;
  client: LocaleStrings;
  scope: LocaleStrings;
  challenge: LocaleStrings;
  solution: LocaleStrings;
  results: LocaleStrings;
}

export interface CategoryDefinition {
  id: PortfolioCategory;
  label: LocaleStrings;
  eyebrow: LocaleStrings;
  headline: LocaleStrings;
  description: LocaleStrings;
  featureList: LocaleStrings[];
  tags: LocaleStrings[];
}

export const portfolioCategoryMeta: Record<PortfolioCategory, CategoryDefinition> = {
  photo: {
    id: 'photo',
    label: { en: 'Photography', it: 'Fotografia' },
    eyebrow: { en: 'Photo studio', it: 'Studio fotografico' },
    headline: { en: 'Commercial photography', it: 'Fotografia commerciale' },
    description: {
      en: 'Editorial campaigns, portraiture, product storytelling, and location-led imagery for premium brands.',
      it: 'Campagne editoriali, ritratti, storytelling di prodotto e immagini in location per brand premium.',
    },
    featureList: [
      { en: 'Luxury product imagery', it: 'Immagini di prodotto premium' },
      { en: 'Portrait-led campaigns', it: 'Campagne con ritratto' },
      { en: 'Atmospheric location work', it: 'Lavoro in location atmosferiche' },
    ],
    tags: [
      { en: 'Campaign stills', it: 'Still di campagna' },
      { en: 'Editorial', it: 'Editoriale' },
      { en: 'Portraiture', it: 'Ritratti' },
    ],
  },
  video: {
    id: 'video',
    label: { en: 'Video', it: 'Video' },
    eyebrow: { en: 'Video direction', it: 'Direzione video' },
    headline: { en: 'Cinematic video production', it: 'Produzione video cinematografica' },
    description: {
      en: 'Short-form commercial edits, motion-led brand stories, and polished reels designed to feel premium and intentional.',
      it: 'Montaggi commerciali brevi, brand stories in movimento e reel accurati pensati per risultare premium e intenzionali.',
    },
    featureList: [
      { en: 'Brand story editing', it: 'Montaggio di brand story' },
      { en: 'Motion-led campaigns', it: 'Campagne in movimento' },
      { en: 'Commercial reel production', it: 'Produzione di reel commerciali' },
    ],
    tags: [
      { en: 'Commercial', it: 'Commerciale' },
      { en: 'Direction', it: 'Regia' },
      { en: 'Post-production', it: 'Post-produzione' },
    ],
  },
  '3d': {
    id: '3d',
    label: { en: '3D', it: '3D' },
    eyebrow: { en: '3D studio', it: 'Studio 3D' },
    headline: { en: 'Immersive 3D content', it: 'Contenuti 3D immersivi' },
    description: {
      en: 'Product stories, stand-alone environments, and digital scenes built to feel cinematic, tactile, and undeniably premium.',
      it: 'Storytelling di prodotto, ambientazioni autonome e scene digitali costruite per essere cinematiche, tattili e premium.',
    },
    featureList: [
      { en: 'Luxury product storytelling', it: 'Storytelling di prodotto premium' },
      { en: 'Immersive motion-led campaigns', it: 'Campagne immersive in movimento' },
      { en: 'Cinematic 3D environments', it: 'Ambientazioni 3D cinematografiche' },
    ],
    tags: [
      { en: 'Product', it: 'Prodotto' },
      { en: 'Atmosphere', it: 'Atmosfera' },
      { en: 'Motion', it: 'Motion' },
    ],
  },
};

export function getProjectDateValue(project: PortfolioProject): number {
  if (project.date) {
    const timestamp = new Date(project.date).getTime();
    if (!isNaN(timestamp)) return timestamp;
  }
  if (project.year) {
    const parsedYear = parseInt(project.year, 10);
    if (!isNaN(parsedYear)) {
      return new Date(`${parsedYear}-01-01T00:00:00Z`).getTime();
    }
  }
  return 0;
}

export function sortProjectsByDateDesc(projects: PortfolioProject[]): PortfolioProject[] {
  return [...projects].sort((a, b) => {
    const timeA = getProjectDateValue(a);
    const timeB = getProjectDateValue(b);
    if (timeA !== timeB) {
      return timeB - timeA;
    }
    const strA = a.date || a.year || '';
    const strB = b.date || b.year || '';
    return strB.localeCompare(strA);
  });
}

const projectModules = import.meta.glob('../content/projects/*/index.ts', { eager: true }) as Record<string, { project: PortfolioProject }>;
const rawPortfolioProjects: PortfolioProject[] = Object.values(projectModules).map(mod => mod.project);

export const portfolioProjects: PortfolioProject[] = sortProjectsByDateDesc(rawPortfolioProjects);

const featuredCategoryOrder: PortfolioCategory[] = ['3d', 'photo', 'video'];

export const featuredPortfolioProjects = featuredCategoryOrder
  .map((category) => portfolioProjects.find((project) => project.category === category && project.featured))
  .filter((project): project is PortfolioProject => project !== undefined);

export function addPortfolioProject(project: PortfolioProject) {
  rawPortfolioProjects.push(project);
  portfolioProjects.splice(0, portfolioProjects.length, ...sortProjectsByDateDesc(rawPortfolioProjects));
  return portfolioProjects.length;
}

export { formatProjectDate } from '../lib/date';

export default portfolioProjects;
