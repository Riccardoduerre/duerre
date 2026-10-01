# 🚀 QUICK DEPLOYMENT GUIDE

## One-Command Deploy

```bash
npm run deploy:gh-pages
```

This publishes the current build to the `gh-pages` branch for the configured custom domain, `https://duerremedia.com`.

---

## 📋 5-Minute Setup Checklist

### Step 1: Verify the contact form
- [ ] Confirm the EmailJS public key, service, and template configured in `src/pages/Contact.tsx` belong to the production account
- [ ] Submit a real test message and verify delivery; a local build cannot validate external email delivery

### Step 2: Confirm GitHub Pages (2 min)
- [ ] Go to repository Settings → Pages
- [ ] Set source to `gh-pages` branch
- [ ] Confirm `duerremedia.com` is configured as the custom domain
- [ ] Confirm DNS points to GitHub Pages

### Step 3: Deploy
- [ ] Run: `npm run deploy:gh-pages`
- [ ] Wait 1-2 minutes for GitHub Pages to update
- [ ] Visit your site!

---

## 🔗 URLs After Deployment

```
Italian home:       https://duerremedia.com/?lang=it
English portfolio:  https://duerremedia.com/portfolio?lang=en
Italian portfolio:  https://duerremedia.com/portfolio?lang=it
Digital Marketing:  https://duerremedia.com/digital-marketing?lang=en
Blog:               https://duerremedia.com/blog?lang=en
Contact:            https://duerremedia.com/contact?lang=en
```

---

## ✅ Verify After Deploy

```bash
# Check these all work:
✓ Site loads without errors
✓ Language switching works (EN ↔ IT) without changing the page path
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

1. Go to Contact page: `/contact?lang=en` or `/contact?lang=it`
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
Italian home:       https://duerremedia.com/?lang=it
English portfolio:  https://duerremedia.com/portfolio?lang=en
Italian portfolio:  https://duerremedia.com/portfolio?lang=it
Digital Marketing:  https://duerremedia.com/digital-marketing?lang=en
Blog:               https://duerremedia.com/blog?lang=en
Contact:            https://duerremedia.com/contact?lang=en
  client: { en: '...', it: '...' },
  // ... other fields
}

# Deploy
npm run deploy:gh-pages
```

---

## 🔧 Development Commands

```bash
npm install             # Install dependencies
npm run dev             # Start the development server
npm run build           # Build for production
npm run deploy:gh-pages # Deploy to the configured GitHub Pages custom domain
```

---
1. Go to Contact page: `/contact?lang=en` or `/contact?lang=it`
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
- [ ] Lighthouse score 80+

---

✓ Language switching works (EN ↔ IT) without changing the page path

Your site is live and ready to showcase your portfolio to the world.

**Next steps:**
1. Share your new site!
2. Monitor form submissions
3. Update portfolio/blog as needed
4. Track analytics (optional)

---

**Support**: See [SETUP.md](SETUP.md) for detailed documentation

**Happy deploying!** 🚀
