import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'hono', 'dist', 'jsx', 'dom'),
    },
  },
})