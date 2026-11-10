// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const baseURL = (globalThis as typeof globalThis & { process: { env: Record<string, string | undefined> } }).process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@vueuse/nuxt/module', 'nuxt-svgo', 'nuxt-swiper'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { typeCheck: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title:
        'Высшая школа программной инженерии',
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` }],
    },
  },

  srcDir: './src',
  dir: {
    app: 'app/entrypoint',
    pages: 'app/routes',
    layouts: 'app/layouts',
  },

  css: ['~/app/styles/main.css'],

  components: [{ path: './shared/ui', prefix: 'ui', extensions: ['vue'] }],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  svgo: {
    defaultImport: 'component',
    componentPrefix: 'icon',
    autoImportPath: false,
  },

  image: {
    format: ['webp'],
    alias: {
      '/images/': `${baseURL}images/`,
    },
  },
})
