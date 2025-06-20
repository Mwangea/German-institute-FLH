import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
=======
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'public',
>>>>>>> 060b1ce7abdc06bd39dde140897ff81cbd322821
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
