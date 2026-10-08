/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-color)',
          text: 'var(--text-color)',
          surface: 'var(--surface-color)',
          border: 'var(--border-color)', // Even though we drop borders, keeping the variable might be good for subtle things
          accent: 'var(--accent-color)',
          mad: 'var(--mad-color)',
          'mad-text': 'var(--mad-text-color)',
          muted: 'var(--muted-color)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
