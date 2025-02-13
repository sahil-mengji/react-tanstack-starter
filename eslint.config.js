import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest', // Corresponds to "ecmaVersion": "latest"
      sourceType: 'module' // Corresponds to "sourceType": "module"
    }
  },
  {
    // Set environment
    env: {
      browser: true,
      es2021: true
    }
  },
  // Include ESLint base recommendations, TypeScript, and React plugins
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Prettier integration
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error' // Enforce Prettier rules as errors
    }
  },
  // Disabling `react/react-in-jsx-scope` rule
  {
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  // Apply Prettier config
  prettierConfig
];
