module.exports = {
  root: true,
  extends: [require.resolve('./style-guide/astro')],
  rules: {
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  ignorePatterns: ['babel.config.js'],
};
