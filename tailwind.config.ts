import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {},
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
} satisfies Config

export default config
