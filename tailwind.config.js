/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-color)',
          text: 'var(--text-color)',
          surface: 'var(--surface-color)',
          border: 'var(--border-color)',
          accent: 'var(--accent-color)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
