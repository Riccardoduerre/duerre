import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'duerre';

const prodBase = `/${repoName}/`;
const base = process.env.VITE_BASE ?? (process.env.NODE_ENV === 'production' ? prodBase : '/');

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 4173,
  },
});
