module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'cypress'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended'
  ],
  env: {
    node: true,
    'cypress/globals': true
  },
  ignorePatterns: ['cypress/reports/**/*'],
  rules: {}
};