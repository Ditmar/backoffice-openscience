const { rules } = require('./rules/astro');

module.exports = {
  extends: [
    require.resolve('./react'),
    require.resolve('./configurations/_base'),
    'plugin:astro/recommended',
  ],
  ignorePatterns: ['app-server/**', '.yarn/**', 'Dockerfile', '.github/**'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: rules,
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          typescript: '@typescript-eslint/parser',
        },
      },
    },
  ],
};
