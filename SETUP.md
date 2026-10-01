# Duerre Portfolio — Setup & Deployment Guide

## 📋 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git for version control
- GitHub account for deployment
# Duerre Media Setup & Deployment

## Requirements

- Node.js 20.19 or newer, or Node.js 22.12 or newer
- npm
- GitHub access to the `Riccardoduerre/duerre` repository for deployment

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The application uses one shared route tree for both English and Italian. Language selection is stored in the browser and shareable as `?lang=en` or `?lang=it`; Italian is the fallback when browser-language detection is unavailable. Routes include `/`, `/portfolio`, `/photo`, `/video`, `/3d`, `/digital-marketing`, `/about`, `/blog`, `/contact`, and `/privacy`.

## Contact Form

The form uses EmailJS. Before launch, confirm the public key, service ID, and template ID in `src/pages/Contact.tsx` match the production EmailJS account, then submit a real test message and confirm delivery. The production build cannot verify the external EmailJS configuration. Public keys are visible by design; private keys must never be placed in frontend code.

## Deployment

The deploy script builds with a root base path, generates static HTTP-200 route shells and a localized sitemap, publishes `dist/` to the `gh-pages` branch, and copies `CNAME`. It is configured for the custom domain `duerremedia.com`; the project-path GitHub Pages URL is not supported by this configuration.

1. In repository Settings → Pages, select the `gh-pages` branch as the publishing source.
2. Confirm `duerremedia.com` is configured in Pages and its DNS points to GitHub Pages.
3. Deploy with:

```bash
npm run deploy:gh-pages
```

4. Verify the home page, language switch, theme toggle, portfolio and detail pages, blog, Digital Marketing page, contact form, and images at `https://duerremedia.com`.

## Project Structure

- `src/pages/`: home, category, portfolio, blog, contact, and Digital Marketing pages
- `src/components/`: shared navigation, footer, theme toggle, and error boundary
- `src/i18n/`: English and Italian translations and locale state
- `src/data/`: portfolio and blog content
- `src/content/blog/`: localized Markdown articles
- `src/assets/images/optimized/`: resized WebP files used by the app
- `src/assets/images/`: retained image originals
- `public/og-image.webp`: stable social-sharing image URL

## Images and Brand Colors

App imagery uses resized WebP derivatives from `src/assets/images/optimized/`; original images remain in `src/assets/images/`. When replacing an image, update the relevant data reference and generate a matching WebP derivative.

Theme tokens are in `src/index.css`. The light theme uses `#F1F0EA`, `#2B2B2C`, `#C5C7C4`, and `#00B3FF`; the dark theme uses `#2B2B2C`, `#F1F0EA`, `#383E42`, `#97999B`, and `#00B3FF`.
The contact form in `src/pages/Contact.tsx` uses:
