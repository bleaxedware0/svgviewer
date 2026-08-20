import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the app at /svgviewer/
  base: process.env.GITHUB_ACTIONS ? '/svgviewer/' : './',
})
