import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { watchAndRun } from 'vite-plugin-watch-and-run'

import { remultKit } from '../remult-kit/dist/esm/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // We need this to strippe out things
    remultKit({ stripper: { debug: false } }),
    svelte(),
    // @ts-ignore
    watchAndRun([
      {
        name: 'update',
        watch: path.resolve('src/**/*'),
        run: 'npm run build',
        delay: 300,
      },
    ]),
  ],

  build: {
    outDir: '../remult-kit/src/lib/auth/static',
    emptyOutDir: true,
    assetsDir: './assets',
  },

  server: {
    port: 4242,
  },
})
