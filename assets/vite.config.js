import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Set the base path for your GitHub Pages project site.
  // For 'https://kendallmark3.github.io/actions/', the base should be '/actions/'.
  base: '/actions/',
  build: {
    outDir: 'dist', // Ensure Vite outputs to the 'dist' folder
  }
});
