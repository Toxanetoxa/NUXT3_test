import type { Config } from 'tailwindcss'

import { reduce, reduce4 } from './utils'

export default {
  content: [''],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Brygada 1918"', 'serif'],
        work: ['Work Sans', 'sans-serif']
      },
      colors: {
        'grey-1': '#5C556B',
        'grey-2': '#D3CFDB',
        'light-grey': '#F3F1F7',
        dark: '#160736',
        black: '#221F1F',
      },
      fontSize: {
        ...reduce([10, 12, 14, 16, 18, 24, 30, 32, 42, 48, 60]),
      },
      padding: {
        ...reduce4([22.5])
      },
      lineHeight: {
        100: '1',
        110: '1.1',
        117: '1.172',
        125: '1.25',
        130: '1.3',
        137: '1.375',
        143: '1.43',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
} satisfies Config
