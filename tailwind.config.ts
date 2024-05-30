import type { Config } from 'tailwindcss'

import { iOSSystemColors, rgbToHex } from './color'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {},
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        light: {
          'color-scheme': 'light',

          primary: '#33A6B8',
          secondary: '#A8D8B9',
          accent: '#33A6B8',

          'accent-content': '#FAFAFA',

          neutral: rgbToHex(iOSSystemColors.light.gray3),

          'base-100': '#FFFFFF',
          'base-content': '#000000',

          info: rgbToHex(iOSSystemColors.light.blue),
          success: rgbToHex(iOSSystemColors.light.green),
          warning: rgbToHex(iOSSystemColors.light.orange),
          error: rgbToHex(iOSSystemColors.light.red),
        },
      },
      {
        dark: {
          'color-scheme': 'dark',

          primary: '#F596AA',
          secondary: '#FB966E',
          accent: '#F596AA',

          neutral: rgbToHex(iOSSystemColors.dark.gray3),

          'base-100': '#1C1C1C',
          'base-content': '#FFFFFF',

          info: rgbToHex(iOSSystemColors.dark.blue),
          success: rgbToHex(iOSSystemColors.dark.green),
          warning: rgbToHex(iOSSystemColors.dark.orange),
          error: rgbToHex(iOSSystemColors.dark.red),
        },
      },
    ],
  },
} satisfies Config

export default config
