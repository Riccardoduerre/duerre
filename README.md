# Duerre — Visual Production Atelier & Editorial Journal

Commercial Photography, Cinema & Video Production, 3D CGI Rendering, and Digital Brand Direction by Riccardo Riva. Live at [duerremedia.com](https://duerremedia.com).

Built with [Astro](https://astro.build) and Tailwind CSS v4, bilingual (Italian default at `/`, English at `/en/`), deployed to GitHub Pages.

## Commands

```bash
npm install
npm run dev          # local dev server (drafts are visible)
npm run build        # static build into dist/ (drafts excluded)
npm run preview      # serve dist/ locally
npm run typecheck
npm run new-post -- <slug>
npm run new-project -- <slug>
```

Node 22+ is required.

## Content Architecture (`src/content/`)

All content is managed via native Astro Content Collections in `src/content/portfolio/` and `src/content/blog/`, strictly validated against the TypeScript/Zod schemas in `src/content/config.ts` (and re-exported by `src/content.config.ts`).

Adding new content is as simple as dropping a Markdown (`.md` or `.mdx`) file directly into `src/content/portfolio/` or `src/content/blog/` (or using a `<slug>/it.md` and `<slug>/en.md` folder for bilingual entries).

### Portfolio Collection — `src/content/portfolio/`

Required frontmatter fields enforced by `src/content/config.ts`:
- `title`, `description`, `client`, `year`, `publishDate`, `services` (array), `tags` (array), `coverImage`, `coverAlt`
- Optional case study metadata: `role`, `category` (`photo` | `video` | `3d` | `marketing`), `bentoSpan` (`hero` | `tall` | `wide` | `standard` | `full`), `featured`, `youtubeId`, `videoUrl`, `aspectRatio`, `challenge`, `solution`, `results`, `deliverables`, `gear`, `gallery`.

### Blog Collection — `src/content/blog/`

Required frontmatter fields enforced by `src/content/config.ts`:
- `title`, `description`, `publishDate`, `coverImage`, `tags` (array)
- Optional metadata: `updatedDate`, `featured`, `coverAlt`, `draft`.

## Editorial Design System & Core Web Vitals

- **Global Layout (`src/layouts/Layout.astro` & `src/styles/global.css`)**: Minimalist luxury editorial typography with extreme scale contrast (`display-monument`, `display-editorial`, and crisp monospaced micro-tracking), generous negative space, and seamless hairline dividers.
- **Motion & Core Web Vitals**: Lightweight `IntersectionObserver` scroll-reveal animations (`[data-reveal]`), lazy-loaded HTML5 background video hydration (`video[data-lazy-video]`), and native Astro `<Picture formats={['avif', 'webp']} />` optimization across all views.

## License

© 2026 Riccardo Riva · Duerre. All rights reserved.
