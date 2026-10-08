import fs from 'fs';
import path from 'path';

const id = process.argv[2];
if (!id) {
  console.error('Please provide an id for the new project: npm run new-project -- <id>');
  process.exit(1);
}

const dir = path.join('src/content/projects', id);
if (fs.existsSync(dir)) {
  console.error(`Project ${id} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const indexContent = `import { PortfolioProject } from '../../../data/portfolio';
const defaultImage = new URL('../../../assets/images/optimized/default.webp', import.meta.url).href;

export const project: PortfolioProject = {
  id: '${id}',
  category: 'photo',
  featured: false,
  year: new Date().getFullYear().toString(),
  date: new Date().toISOString().split('T')[0],
  image: defaultImage,
  gallery: [defaultImage],
  title: { en: 'New Project', it: 'Nuovo Progetto' },
  client: { en: 'Client Name', it: 'Nome Cliente' },
  scope: { en: 'Scope', it: 'Scopo' },
  challenge: { en: 'Challenge text.', it: 'Testo della sfida.' },
  solution: { en: 'Solution text.', it: 'Testo della soluzione.' },
  results: { en: 'Results text.', it: 'Testo dei risultati.' },
};
`;

fs.writeFileSync(path.join(dir, 'index.ts'), indexContent);

console.log(`Created new project scaffolding in ${dir}`);
