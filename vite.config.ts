import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/modules/core/components'),
    },
  }
})
