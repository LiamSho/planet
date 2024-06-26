/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
}
