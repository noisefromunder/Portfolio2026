import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio2026/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        work: 'work.html',
        lab: 'lab.html'
      }
    }
  }
})
