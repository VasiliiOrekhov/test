import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      routes: '/src/routes',
      assets: '/src/assets',
      store: '/src/store',
      utils: '/src/utils',
      constants: '/src/constants',
      containers: '/src/containers',
    },
  },
});
