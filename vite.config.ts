import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    // Add this to ensure public files are copied:
    assetsInlineLimit: 0 // Treat all assets as files
  },
  // Add this publicDir configuration:
  publicDir: 'public'
});
