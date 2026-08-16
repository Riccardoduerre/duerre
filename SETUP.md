# Duerre Portfolio — Setup & Deployment Guide

## 📋 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git for version control
- GitHub account for deployment

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📧 Contact Form Setup (EmailJS)

The contact form is configured to send emails using **EmailJS**, a free email service. Follow these steps to enable it:

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Confirm your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred provider)
4. Create a new service with ID: `service_duerre_prod`
5. Connect your email account (you'll need an app password for Gmail)

### Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Set template ID: `template_contact_riccardo`
4. Use this template content:

```
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form at duerremedia.com
```

### Step 4: Verify Setup in Code
The contact form in `src/pages/Contact.tsx` uses:
- **Public Key**: `OU8uo5N_6Yp0oEWfP` (project-specific)
- **Service ID**: `service_duerre_prod`
- **Template ID**: `template_contact_riccardo`

**Note**: The current public key is a demo. For production:
1. Get your personal public key from EmailJS dashboard
2. Replace `OU8uo5N_6Yp0oEWfP` in Contact.tsx with your key
3. Update the service and template IDs if different

### Step 5: Test the Form
1. Navigate to the Contact page
2. Fill in the form and submit
3. Check that email arrives at your configured address

---

## 🚀 Deployment to GitHub Pages

### Prerequisites for Deployment
- GitHub account with SSH key configured
- `gh-pages` package installed (already in devDependencies)

### Deployment Steps

#### Option 1: Deploy with Custom Domain (Recommended)

1. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "Deploy from branch"
   - Select `gh-pages` branch
   - Enable custom domain and add `duerremedia.com`

2. **Configure DNS Records**
   - Add CNAME record pointing to `riccardoduerre.github.io`
   - Or use A records to GitHub Pages IPs

3. **Deploy**
   ```bash
   npm run deploy:gh-pages
   ```

4. **Verify**
   - Visit https://duerremedia.com
   - Test both `/en` and `/it` routes
   - Test all pages and forms

#### Option 2: Deploy to GitHub Pages without Custom Domain

```bash
npm run deploy:gh-pages
# Visit: https://riccardoduerre.github.io/duerre
```

### Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Language switching works (EN/IT)
- [ ] Theme toggle persists on reload
- [ ] Portfolio images load
- [ ] Blog posts render correctly
- [ ] Contact form sends emails
- [ ] Mobile responsiveness works
- [ ] Console has no errors

---

## 🔧 Project Structure

```
src/
├── pages/              # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── PortfolioDetail.tsx    # New: Individual project pages
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   └── Contact.tsx            # EmailJS integration
├── components/         # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── ErrorBoundary.tsx
├── i18n/              # Internationalization
│   ├── index.ts
│   └── LocaleContext.tsx
├── data/              # Static data
│   ├── portfolio.ts
│   └── posts.ts
├── lib/               # Utilities
│   └── markdown.ts    # Markdown rendering
├── assets/            # Images & media
│   └── images/
├── App.tsx
├── AppRoutes.tsx      # Route configuration
├── LocaleLayout.tsx   # Layout wrapper
└── index.css          # Global styles & theme
```

---

## 📱 Features

### Multi-language Support (EN/IT)
- Language switcher in navbar
- Automatic browser language detection
- Persistent language preference in localStorage
- URL-based routing: `/#/en/...` and `/#/it/...`

### Dark/Light Theme
- Theme toggle in navbar
- Automatic system preference detection
- Persistent theme preference
- CSS custom properties for theming

### Image Optimization
- Lazy loading on all images
- Responsive image sizing
- Optimized image assets
- WebP support

### SEO
- Open Graph meta tags
- Twitter Card support
- Canonical URLs
- Bilingual hreflang tags
- Structured metadata

### Accessibility
- ARIA labels on form fields
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Alt text on images

---

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-color: #2E5D7A;  /* Primary brand color */
  --bg-color: #F8F7F3;       /* Light background */
  /* ... other variables */
}

.dark {
  --bg-color: #0F1115;       /* Dark background */
  /* ... dark theme values */
}
```

### Add New Blog Posts
1. Create markdown files in `src/content/blog/`
2. Name them: `post-slug.en.md` and `post-slug.it.md`
3. Add entry to `src/data/posts.ts`

### Add New Portfolio Projects
Edit `src/data/portfolio.ts` and add project data:
```typescript
{
  id: 'unique-id',
  category: 'Commercial',
  year: '2026',
  image: /* featured image */,
  gallery: [/* gallery images */],
  title: { en: '...', it: '...' },
  // ... other fields
}
```

---

## 🔐 Security Notes

- EmailJS public key is visible in frontend code (this is intentional)
- Rate limiting recommended on backend for production
- Consider adding CAPTCHA for contact form to prevent spam
- Keep dependencies updated: `npm audit` and `npm audit fix`

---

## 📊 Performance

- **Bundle size**: ~77 KB gzipped (JavaScript)
- **CSS size**: ~3.9 KB gzipped
- **Images**: Optimized JPEG, lazy loaded
- **Core Web Vitals**: Optimized for mobile

### Optimization Tips
```bash
# Check bundle size
npm run build -- --report

# Audit dependencies
npm audit

# Update packages
npm update
```

---

## 🐛 Troubleshooting

### Contact Form Not Sending
1. Check EmailJS service is active
2. Verify public key matches your account
3. Check browser console for errors
4. Ensure email service is connected in EmailJS

### Images Not Loading
1. Check file paths in data files
2. Verify images exist in `src/assets/images/`
3. Build project: `npm run build`

### Language Switching Not Working
1. Check localStorage is enabled
2. Verify locale value is 'en' or 'it'
3. Check browser console for React errors

### Build Errors
1. Run `npm install` to ensure dependencies
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript: `npm run build` shows detailed errors

---

## 📞 Support

For issues or questions:
- Check browser console for error messages
- Review EmailJS documentation
- Consult GitHub Pages deployment docs
- Inspect network requests in DevTools

---

## 📄 License

© 2026 Riccardo Riva. All rights reserved.

---

**Last Updated**: August 2026
**Node Version**: 16+
**Package Manager**: npm 8+
