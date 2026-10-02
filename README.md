# Duerre Media — Portfolio & Blog

Commercial photography, video, 3D content, digital marketing, and visual direction by Riccardo Riva.

**Live Site**: [duerremedia.com](https://duerremedia.com)

## 🎯 Features

- **Bilingual** (English & Italian) with language switcher
- **Dark/Light Theme** toggle with automatic system preference detection
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Portfolio Gallery** with project detail pages and image galleries
- **Digital Marketing** service page focused on strategy, delivery, and measurement
- **Blog System** with Markdown support and easy post creation
- **Contact Form** with email integration (EmailJS)
- **SEO Metadata** with localized page titles/descriptions and Open Graph/Twitter previews
- **Performance Optimized** with lazy loading and optimized images
- **Accessible** with semantic HTML and ARIA labels

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy:gh-pages
```

## 📝 Setup Instructions

For detailed setup and deployment instructions, see [SETUP.md](SETUP.md).

### Key Steps:
1. Install dependencies: `npm install`
2. Configure EmailJS for contact form (see SETUP.md)
3. Test locally: `npm run dev`
4. Deploy: `npm run deploy:gh-pages`

## 🛠 Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool & dev server
- **Marked** - Markdown rendering
- **EmailJS** - Contact form emails
- **GitHub Pages** - Hosting

## 📂 Project Structure

```
src/
├── pages/              # Route pages, including category and digital marketing views
├── components/         # Reusable components
├── i18n/              # Internationalization
├── data/              # Static data (portfolio, blog)
├── lib/               # Utilities
└── assets/            # Images & media

scripts/
└── copy-404.js        # GitHub Pages SPA routing

content/
└── blog/              # Markdown blog posts
```

## 🌐 Internationalization

The site supports **English** and **Italian** with:
- One route tree with flat paths; locale is a query parameter (`?lang=en` or `?lang=it`), not a prefixed duplicate route
- Language switcher in navbar
- Browser-language detection with Italian as the fallback
- Persistent language preference

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `src/index.css` to customize the color scheme.

### Add Blog Posts
1. Create markdown files in `src/content/blog/`
   - `post-slug.en.md` (English)
   - `post-slug.it.md` (Italian)
2. Add entry to `src/data/posts.ts`

### Add Portfolio Projects
Edit `src/data/portfolio.ts` with new project data including:
- Title, client, scope, challenge, solution, results
- Featured image and gallery images
- Category and year

## 📧 Contact Form

The contact form sends emails using **EmailJS** (free tier).

**Configuration**:
- Service ID: `service_k40isq9`
- Template ID: `template_ipjxcbm`
- Recipient: `riccardo@duerremedia.com`

For setup details, see [SETUP.md](SETUP.md).

## 🚢 Deployment

### GitHub Pages (Recommended)
```bash
npm run deploy:gh-pages
```

The deploy script publishes to the `gh-pages` branch with a root base path, generates static route shells and a localized sitemap, and copies the repository `CNAME`. It is configured for `duerremedia.com`. Paths stay flat (for example `/portfolio` and `/digital-marketing`); locale is selected with a query parameter, not a prefixed duplicate route.

### Custom Domain
1. Add CNAME file with domain name
2. Configure DNS records pointing to GitHub Pages
3. Enable custom domain in GitHub repository settings

## 🔍 SEO

- Open Graph meta tags for social sharing
- Twitter Card support
- Canonical URLs
- Localized page titles and descriptions

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on form controls
- Color contrast compliance
- Keyboard navigation support
- Image alt text

## 📊 Performance

- **Images**: Resized WebP derivatives are used by the app; source originals are retained
- Below-the-fold imagery uses native lazy loading

## 🐛 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔒 Security

- No sensitive data in frontend code
- EmailJS rate limiting recommended
- Regular dependency updates: `npm audit`
- CAPTCHA recommended for production

## 📄 License

© 2026 Riccardo Riva. All rights reserved.

---

**Built with React, Vite, Tailwind CSS, and ❤️**

*For detailed documentation, see [SETUP.md](SETUP.md)*
