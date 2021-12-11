import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import replace from '@rollup/plugin-replace'

const pwaOptions = {
  // mode: 'development',
  // base: '/hackyeah-2021/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'PWA Router',
    short_name: 'PWA Router',
    theme_color: '#6200ee',
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
}

const replaceOptions = { __DATE__: new Date().toISOString() }
const claims = process.env.CLAIMS === 'true'
const reload = process.env.RELOAD_SW === 'true'

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src'
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts'
  pwaOptions.strategies = 'injectManifest'
  pwaOptions.manifest.name = 'PWA Inject Manifest'
  pwaOptions.manifest.short_name = 'PWA Inject'
}

if (claims)
  pwaOptions.registerType = 'autoUpdate'

if (reload) {
  // @ts-ignore
  replaceOptions.__RELOAD_SW__ = 'true'
}

export default defineConfig({
  // base: '/hackyeah-2021/',
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  plugins: [
    svelte(),
    VitePWA(pwaOptions),
    replace(replaceOptions),
  ],
})

