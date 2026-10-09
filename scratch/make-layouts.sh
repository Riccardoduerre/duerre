#!/bin/bash

cat << 'EOF' > src/layouts/BaseLayout.astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import type { Locale } from '../i18n';

interface Props {
  title: string;
  description: string;
  lang: Locale;
  image?: string;
}

const { title, description, lang, image } = Astro.props;
---

<html lang={lang}>
  <head>
    <BaseHead title={title} description={description} image={image} />
    <script is:inline>
      document.documentElement.classList.add('js');
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    </script>
  </head>
  <body>
    <Header lang={lang} />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer lang={lang} />
  </body>
</html>
EOF

cat << 'EOF' > src/layouts/BlogPostLayout.astro
---
import BaseLayout from './BaseLayout.astro';
import type { Locale } from '../i18n';

interface Props {
  title: string;
  description: string;
  lang: Locale;
  image?: string;
}

const { title, description, lang, image } = Astro.props;
---

<BaseLayout title={title} description={description} lang={lang} image={image}>
  <div class="mx-auto max-w-3xl px-6 py-12 md:py-24">
    <slot />
  </div>
</BaseLayout>
EOF

cat << 'EOF' > src/layouts/ProjectGalleryLayout.astro
---
import BaseLayout from './BaseLayout.astro';
import type { Locale } from '../i18n';

interface Props {
  title: string;
  description: string;
  lang: Locale;
  image?: string;
}

const { title, description, lang, image } = Astro.props;
---

<BaseLayout title={title} description={description} lang={lang} image={image}>
  <div class="mx-auto max-w-7xl px-6 py-12 md:py-24">
    <slot />
  </div>
</BaseLayout>
EOF
