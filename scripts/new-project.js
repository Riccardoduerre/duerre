import fs from 'fs';
import path from 'path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Usage: npm run new-project -- <kebab-case-slug>');
  process.exit(1);
}

const dir = path.join('src/content/portfolio', slug);
if (fs.existsSync(dir)) {
  console.error(`Portfolio project ${slug} already exists!`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });
fs.copyFileSync('src/assets/blog/_RIK7376_HDR.webp', path.join(dir, 'cover.webp'));

const date = new Date().toISOString().split('T')[0];
const year = date.slice(0, 4);

const frontmatter = (title, description) => `---
title: "${title}"
description: "${description}"
client: "Client Name"
role: "Visual Direction"
year: "${year}"
publishDate: ${date}
services:
  - "Commercial Photography"
  - "Creative Direction"
tags:
  - "Campaign"
  - "Photography"
category: "photo"
featured: false
bentoSpan: "standard"
draft: true
aspectRatio: "16:9"
deliverables: []
gear: []
challenge: "Describe the creative challenge"
solution: "Describe the strategic and technical approach"
results: "Key impact or metrics"
coverImage: "./cover.webp"
coverAlt: "Describe the cover image"
# youtubeId: "vpW0ibNGsBo"
gallery: []
---
`;

fs.writeFileSync(path.join(dir, 'en.md'), `${frontmatter('New Project', 'English summary.')}\nEnglish case study.\n`);
fs.writeFileSync(path.join(dir, 'it.md'), `${frontmatter('Nuovo Progetto', 'Sommario in italiano.')}\nCaso studio in italiano.\n`);

console.log(`Created draft portfolio project in ${dir} — replace cover.webp, then set draft: false to publish.`);
