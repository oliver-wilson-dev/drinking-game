module.exports = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'jest'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    allowImportExportEverywhere: true
  },
  rules: {
    'no-console': 'warn',
    curly: 'warn',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-shadow': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/prop-types': 'off'
  },
  overrides: [{
    files: ['**/*.test*'],
    rules: {
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-console': 'off',
    }
  },
  {
    files: ['server/**/*.js*'],
    rules: {
      'no-console': 'off',
    }
  }
  ],
};
