import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages publica el sitio dentro del subdirectorio del repositorio.
  base: './',
  plugins: [react()],
})
