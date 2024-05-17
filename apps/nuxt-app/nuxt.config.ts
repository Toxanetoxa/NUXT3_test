// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src/',
  css: ['@/assets/css/main.css', '@/assets/css/styles.scss'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  imports: {
    autoImport: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      api: process.env.NUXT_API_URL ?? 'http://127.0.0.1:8787/trpc',
    },
  },
})
