import { defineConfig } from 'vite'

export default defineConfig({
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
