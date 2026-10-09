import fs from 'fs';
import path from 'path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Usage: npm run new-project -- <kebab-case-slug>');
  process.exit(1);
}

const dir = path.join('src/content/projects', slug);
if (fs.existsSync(dir)) {
  console.error(`Project ${slug} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });
// Placeholder cover so the schema's image() validation passes; replace with the real cover.webp.
fs.copyFileSync('src/assets/blog/_RIK7376_HDR.webp', path.join(dir, 'cover.webp'));

const date = new Date().toISOString().split('T')[0];
const year = date.slice(0, 4);

const frontmatter = (title, description) => `---
title: "${title}"
description: "${description}"
client: "Client Name"
role: "Role"
year: "${year}"
date: ${date}
category: "photo"
featured: false
draft: true
cover: "./cover.webp"
coverAlt: "Describe the cover image"
# youtubeId: "dQw4w9WgXcQ"
gallery: []
# gallery:
#   - image: "./gallery-01.webp"
#     alt: "Describe the photo"
#     caption: "Optional caption"
---
`;

fs.writeFileSync(path.join(dir, 'en.md'), `${frontmatter('New Project', 'English summary.')}\nEnglish case study.\n`);
fs.writeFileSync(path.join(dir, 'it.md'), `${frontmatter('Nuovo Progetto', 'Sommario in italiano.')}\nCaso studio in italiano.\n`);

console.log(`Created draft project in ${dir} — replace cover.webp, then set draft: false to publish.`);
