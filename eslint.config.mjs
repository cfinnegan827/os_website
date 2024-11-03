import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      'indent': ['error', 2],          // 2 spaces for indentation
      'quotes': ['error', 'single'],   // Enforce single quotes
      'semi': ['error', 'always'],     // Require semicolons
      'react/react-in-jsx-scope': 'off'   
    }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];