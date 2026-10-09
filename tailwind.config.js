/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.15em',
      },
      keyframes: {
        subtleZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'subtle-zoom': 'subtleZoom 16s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      typography: (theme) => ({
        studio: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.muted'),
            '--tw-prose-hr': theme('colors.line'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.line'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-pre-code': theme('colors.bg'),
            '--tw-prose-pre-bg': theme('colors.ink'),
            '--tw-prose-th-borders': theme('colors.line'),
            '--tw-prose-td-borders': theme('colors.line'),
            '--tw-prose-invert-body': theme('colors.ink'),
            '--tw-prose-invert-headings': theme('colors.ink'),
            '--tw-prose-invert-lead': theme('colors.muted'),
            '--tw-prose-invert-links': theme('colors.accent'),
            '--tw-prose-invert-bold': theme('colors.ink'),
            '--tw-prose-invert-counters': theme('colors.muted'),
            '--tw-prose-invert-bullets': theme('colors.muted'),
            '--tw-prose-invert-hr': theme('colors.line'),
            '--tw-prose-invert-quotes': theme('colors.ink'),
            '--tw-prose-invert-quote-borders': theme('colors.line'),
            '--tw-prose-invert-captions': theme('colors.muted'),
            '--tw-prose-invert-code': theme('colors.ink'),
            '--tw-prose-invert-pre-code': theme('colors.bg'),
            '--tw-prose-invert-pre-bg': theme('colors.ink'),
            '--tw-prose-invert-th-borders': theme('colors.line'),
            '--tw-prose-invert-td-borders': theme('colors.line'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
