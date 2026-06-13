import { defineConfig } from 'eslint/config';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescript from './typescript.js';

/* 
  Following plugins are incompatible with eslint 10
  Make sure to use eslint 9 instead
*/
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  ...typescript,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended
    ],
    plugins: {
      '@stylistic': stylistic,
      'react-refresh': reactRefresh
    },
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      '@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-one-expression-per-line': ['error', {
        allow: 'none'
      }],
      '@stylistic/jsx-wrap-multilines': ['error', {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        declaration: 'parens-new-line',
        return: 'parens-new-line'
      }],
      'react/jsx-max-props-per-line': ['error', {
        maximum: 1
      }],
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/no-array-index-key': 'error',
      'react/self-closing-comp': ['error', {
        component: true,
        html: true
      }],
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true
      }]
    }
  }
]);
