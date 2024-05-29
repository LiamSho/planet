/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['next-on-pages'],
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:next-on-pages/recommended',
  ],
  rules: {
    'next-on-pages/no-unsupported-configs': 'warn',
  },
}
