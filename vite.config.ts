import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'duerre';
const prodBase = `/${repoName}/`;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const base = env.VITE_BASE ?? (mode === 'production' ? prodBase : '/');

  return {
    plugins: [react()],
    base,
    server: {
      port: 4173,
    },
  };
});
