import nextPlugin from '@next/eslint-plugin-next';

import react from './react.js';

const recommendedRules = nextPlugin.configs?.recommended?.rules ?? {};
const coreWebVitalsRules = nextPlugin.configs?.['core-web-vitals']?.rules ?? {};

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...react,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...recommendedRules,
      ...coreWebVitalsRules,
    },
  },
];
