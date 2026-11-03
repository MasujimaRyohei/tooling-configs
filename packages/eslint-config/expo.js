import react from './react.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['.expo/**', 'android/**', 'dist/**', 'ios/**', 'web-build/**'],
  },
  ...react,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        __DEV__: 'readonly',
      },
    },
  },
];
