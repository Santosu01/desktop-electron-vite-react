import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'adjust-paths',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml(html) {
        return html.replace(/\/assets\//g, './assets/');
      },
    },
  ],
})
