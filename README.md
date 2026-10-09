# Duerre Media — Portfolio & Journal

Photography, film and 3D work by Riccardo Riva. Live at [duerremedia.com](https://duerremedia.com).

Static [Astro](https://astro.build) site styled with Tailwind CSS v4 and `@tailwindcss/typography`, bilingual (English at `/`, Italian at `/it/`), deployed to GitHub Pages.

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

## Content

All content lives in `src/content/` and is validated against the Zod schemas in `src/content.config.ts`; a build fails with a clear message if frontmatter is wrong.

Every entry is a folder with one file per locale: `en.md` and `it.md` (`.mdx` also works).

### Projects — `src/content/projects/<slug>/`

Images are co-located with the Markdown and referenced relatively:

```yaml
cover: "./cover.webp"
coverAlt: "…"
youtubeId: "dQw4w9WgXcQ"   # optional, the 11-character ID, not the URL
gallery:
  - image: "./gallery-01.webp"
    alt: "…"
    caption: "…"            # optional
```

`category` is one of `photo`, `video`, `3d`. Set `featured: true` to show a project on the home page.

### Blog — `src/content/blog/<slug>/`

Required: `title`, `description`, `pubDate`, `coverImage`. Shared covers live in `src/assets/blog/`.

### Drafts

Both scaffold scripts create entries with `draft: true`. Drafts appear in `npm run dev` only; set `draft: false` to publish.

## Images

Source images go through Astro's `<Picture>` at build time, producing AVIF and WebP at several widths with intrinsic dimensions (no layout shift). Commit reasonably sized sources (≈2000–2400 px on the long edge); there's no need to pre-optimize.

- `src/assets/blog/` — blog covers (also the About portrait)
- `src/assets/site/` — home page hero and studio photos
- `src/assets/brand/` — logo and favicon sources

## Styling

Theme tokens (colors, fonts, animations) are defined with `@theme` in `src/styles/global.css`; there is no `tailwind.config.js`. Colors come from the `--c-*` RGB variables, which switch between the dark (default) and light palettes via `data-theme` on `<html>`.

## Contact form

Configured in `src/config/site.ts`. With an empty Web3Forms `accessKey` the contact page falls back to a `mailto:` link; add a key (or a Formspree endpoint as `action`) to enable the form.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with GitHub Pages Actions. In the repository settings, Pages must use **GitHub Actions** as its source. `public/CNAME` sets the custom domain `duerremedia.com`.

## License

© 2026 Riccardo Riva. All rights reserved.
