const { TEST_FILES } = require('./constants.js');
module.exports = {
  overrides: [
    {
      files: TEST_FILES,
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/*.test.[jt]s?(x)', '**/*.spec.[jt]s?(x)'] },
        ],
        'vitest/expect-expect': 'off',
      },
    },
  ],
};
