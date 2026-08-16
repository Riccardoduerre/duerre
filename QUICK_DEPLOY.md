# 🚀 QUICK DEPLOYMENT GUIDE

## One-Command Deploy

```bash
npm run deploy:gh-pages
```

Done! Your site will be live at `https://riccardoduerre.github.io/duerre` (or your custom domain if configured).

---

## 📋 5-Minute Setup Checklist

### Step 1: Configure EmailJS (3 min)
- [ ] Go to [emailjs.com](https://www.emailjs.com)
- [ ] Sign up for free account
- [ ] Create new "Gmail" service with ID: `service_duerre_prod`
- [ ] Create email template with ID: `template_contact_riccardo`
- [ ] Get your **Public Key** from dashboard
- [ ] Update `src/pages/Contact.tsx` with your public key (replace `OU8uo5N_6Yp0oEWfP`)

### Step 2: Configure GitHub Pages (2 min)
- [ ] Go to repository Settings → Pages
- [ ] Set source to `gh-pages` branch
- [ ] Add custom domain if you have one
- [ ] Configure DNS if using custom domain

### Step 3: Deploy
- [ ] Run: `npm run deploy:gh-pages`
- [ ] Wait 1-2 minutes for GitHub Pages to update
- [ ] Visit your site!

---

## 🔗 URLs After Deployment

```
🌐 English Home:    https://duerremedia.com/#/en
🌐 Italian Home:    https://duerremedia.com/#/it
🌐 Portfolio:       https://duerremedia.com/#/en/portfolio
🌐 Blog:            https://duerremedia.com/#/en/blog
🌐 Contact:         https://duerremedia.com/#/en/contact
```

---

## ✅ Verify After Deploy

```bash
# Check these all work:
✓ Site loads without errors
✓ Language switching works (EN → IT)
✓ Theme toggle works (click moon/sun icon)
✓ Portfolio cards clickable, detail pages load
✓ Blog posts render correctly
✓ Contact form appears (test if EmailJS configured)
✓ Images load
✓ No console errors (F12)
✓ Mobile responsive (check on phone)
```

---

## 📧 Contact Form Testing

1. Go to Contact page: `/#/en/contact`
2. Fill out form:
   - Name: Test
   - Email: your-email@test.com
   - Message: Test message
3. Click "Send Message"
4. Check your email (check spam folder)
5. If no email arrives, check:
   - EmailJS account is active
   - Service ID matches `service_duerre_prod`
   - Template ID matches `template_contact_riccardo`
   - Public key in code matches your account

---

## 🆘 Troubleshooting

### Site Not Loading
- [ ] Check domain/URL in browser
- [ ] Wait 2 minutes for GitHub Pages to update
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Check GitHub Pages settings

### Contact Form Not Sending
- [ ] Verify EmailJS account is active
- [ ] Check public key is correct
- [ ] Check browser console for errors (F12)
- [ ] Ensure service/template IDs match
- [ ] Check email spam folder

### Images Not Loading
- [ ] Images should be in `src/assets/images/`
- [ ] Run `npm run build` to regenerate
- [ ] Deploy again: `npm run deploy:gh-pages`

### Language Not Switching
- [ ] Check localStorage is enabled
- [ ] Try different browser
- [ ] Check for console errors (F12)

---

## 📝 Adding Content

### Add Blog Post
```bash
# 1. Create files
echo "# Title" > src/content/blog/post-slug.en.md
echo "# Titolo" > src/content/blog/post-slug.it.md

# 2. Edit src/data/posts.ts and add entry:
{
  slug: 'post-slug',
  title: { en: 'Title', it: 'Titolo' },
  date: 'Month DD, YYYY',
  image: /* featured image URL */,
  excerpt: { en: '...', it: '...' },
  content: { en: postEnMarkdown, it: postItMarkdown }
}

# 3. Deploy
npm run deploy:gh-pages
```

### Add Portfolio Project
```bash
# Edit src/data/portfolio.ts and add entry:
{
  id: 'unique-id',
  category: 'Commercial',
  year: '2026',
  image: /* featured image URL */,
  gallery: [/* gallery image URLs */],
  title: { en: 'Project Title', it: 'Titolo Progetto' },
  client: { en: '...', it: '...' },
  // ... other fields
}

# Deploy
npm run deploy:gh-pages
```

---

## 🔧 Development Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:4173)
npm run build       # Build for production
npm run preview     # Preview production build
npm run deploy      # Deploy to GitHub Pages
```

---

## 📱 Test Checklist (Before Launch)

- [ ] Desktop Chrome
- [ ] Desktop Firefox  
- [ ] Desktop Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iPhone)
- [ ] All pages load
- [ ] Forms work
- [ ] Images load
- [ ] No broken links
- [ ] Theme toggle works
- [ ] Language switch works
- [ ] Lighthouse score 80+

---

## 🎉 You're Done!

Your site is live and ready to showcase your portfolio to the world.

**Next steps:**
1. Share your new site!
2. Monitor form submissions
3. Update portfolio/blog as needed
4. Track analytics (optional)

---

**Support**: See [SETUP.md](SETUP.md) for detailed documentation

**Happy deploying!** 🚀
