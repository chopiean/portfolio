import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deploying to GitHub Pages under a repository path? Set base: '/YOUR-REPO/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
