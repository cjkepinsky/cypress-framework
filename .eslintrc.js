module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'cypress'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:cypress/recommended'],
  env: {
    node: true, 'cypress/globals': true
  },
  ignorePatterns: ['cypress/reports/**/*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'cypress/no-unnecessary-waiting': 'off',
    'cypress/unsafe-to-chain-command': 'off'
  }
};