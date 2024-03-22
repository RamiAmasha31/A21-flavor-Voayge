import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ramiamasha31.github.io/A21-flavor-Voayge/',
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'docs'), // Change the output directory to 'docs'
  },
});
