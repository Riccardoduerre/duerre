import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'duerre';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  server: {
    port: 4173,
  },
});
