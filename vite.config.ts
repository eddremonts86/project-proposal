import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(path.join(__dirname, './src')),
      },
    ],
  },
})
