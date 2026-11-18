import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2.5rem',
        lg: '4rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          elevated: 'rgb(var(--c-surface-elevated) / <alpha-value>)',
        },
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          hover: 'rgb(var(--c-accent-hover) / <alpha-value>)',
        },
        carbon: '#070707',
        paper: '#F8F7F4',
        brass: '#CCA870',
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Plus Jakarta Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        'display-monument': [
          'clamp(2.75rem, 7.5vw + 0.5rem, 8.25rem)',
          { lineHeight: '0.92', letterSpacing: '-0.045em', fontWeight: '300' },
        ],
        'display-editorial': [
          'clamp(2.125rem, 4.8vw + 0.4rem, 5.25rem)',
          { lineHeight: '0.96', letterSpacing: '-0.038em', fontWeight: '300' },
        ],
        'display-section': [
          'clamp(1.75rem, 3.4vw + 0.3rem, 3.75rem)',
          { lineHeight: '1.04', letterSpacing: '-0.032em', fontWeight: '400' },
        ],
        'heading-card': [
          'clamp(1.375rem, 2vw + 0.25rem, 2.25rem)',
          { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '300' },
        ],
        'body-lg': [
          'clamp(1.0625rem, 0.5vw + 0.95rem, 1.25rem)',
          { lineHeight: '1.75', fontWeight: '300' },
        ],
        micro: [
          '0.6875rem',
          { lineHeight: '1.4', letterSpacing: '0.24em', fontWeight: '500' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        36: '9rem',
        44: '11rem',
      },
      boxShadow: {
        editorial: '0 24px 48px -12px rgba(0, 0, 0, 0.55)',
        'editorial-sm': '0 10px 30px -10px rgba(0, 0, 0, 0.35)',
        'glow-accent': '0 0 0 1px rgba(204, 168, 112, 0.35), 0 12px 32px -8px rgba(204, 168, 112, 0.2)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        subtleZoom: {
          '0%': { transform: 'scale(1.07)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'subtle-zoom': 'subtleZoom 20s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.95s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spinSlow 24s linear infinite',
      },
    },
  },
  plugins: [typography],
};
