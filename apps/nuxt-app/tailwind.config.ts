import type { Config } from 'tailwindcss'

import baseConfig from '@utopian-tours/tailwind-config'

export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/error.vue',
    './src/plugins/**/*.{js,ts}',
    // "./nuxt.config.{js,ts}",
  ],
  presets: [baseConfig],
} satisfies Config
