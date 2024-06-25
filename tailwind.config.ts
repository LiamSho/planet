import type { Config } from 'tailwindcss'

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
          primary: '#FFC0CB', // Light Pink
          secondary: '#FFD1DC', // Pastel Pink
          accent: '#FFB6C1', // Blush Pink
          neutral: '#F5F5F5', // Soft Gray
          'base-100': '#FFFFFF', // White
          info: '#B8E6D9', // Mint Green
          success: '#B8E6D9', // Mint Green
          warning: '#FFE5B4', // Peach
          error: '#FFF8DC', // Light Gold
          '--rounded-box': '1rem', // Default border radius
          '--rounded-btn': '1rem', // Default button radius
          '--rounded-badge': '1rem', // Default badge radius
          '--animation-btn': '0.25s', // Button animation duration
          '--animation-input': '0.2s', // Input animation duration
          '--btn-text-case': 'none', // Default button text case
          '--btn-focus-scale': '0.95', // Focus scale for buttons
          '--border-btn': '1px', // Default button border width
        },
      },
      {
        dark: {
          'color-scheme': 'dark',

          primary: '#B03060', // Dark Pink
          secondary: '#CC8899', // Soft Pink
          accent: '#FF8C00', // Dark Orange
          neutral: '#2C2C2C', // Medium Gray
          'base-100': '#1F1F1F', // Dark Gray
          info: '#B8E6D9', // Mint Green
          success: '#B8E6D9', // Mint Green
          warning: '#FF8C00', // Dark Orange
          error: '#8B0000', // Dark Red
          '--rounded-box': '1rem', // Default border radius
          '--rounded-btn': '1rem', // Default button radius
          '--rounded-badge': '1rem', // Default badge radius
          '--animation-btn': '0.25s', // Button animation duration
          '--animation-input': '0.2s', // Input animation duration
          '--btn-text-case': 'none', // Default button text case
          '--btn-focus-scale': '0.95', // Focus scale for buttons
          '--border-btn': '1px', // Default button border width
        },
      },
    ],
  },
} satisfies Config

export default config
