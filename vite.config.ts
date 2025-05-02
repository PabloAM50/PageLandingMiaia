import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas a los assets sean relativas a la raíz del dominio
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
