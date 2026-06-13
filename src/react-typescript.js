import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

/* 
  Following plugins are incompatible with eslint 10
  Make sure to use eslint 9 instead
*/
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import newlineDestructuring from 'eslint-plugin-newline-destructuring'

export default defineConfig([
  {
    ignores: [
      '**/build/**',
      '**/coverage/**',
      '**/dist/**',
      '**/node_modules/**'
    ]
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript
    ],
    plugins: {
      '@stylistic': stylistic,
      'react-refresh': reactRefresh,
      'newline-destructuring': newlineDestructuring
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2025
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        projectService: true,
        sourceType: 'module'
      },
      sourceType: 'module'
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          noWarnOnMultipleProjects: true,
          project: [
            './tsconfig.app.json',
            './tsconfig.node.json'
          ]
        },
        node: true
      },
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        tabWidth: 2
      }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0}],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', {after: true}],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false
      }],
      '@stylistic/object-curly-newline': ['error', {
        ImportDeclaration: {
          consistent: true,
          minProperties: 3,
          multiline: true
        },
        ObjectExpression: {
          consistent: true,
          minProperties: 1,
          multiline: true
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 1,
          multiline: true
        }
      }],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/arrow-spacing': 'error',
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
      '@stylistic/padding-line-between-statements': ['error', {
        blankLine: "always",
        prev: "*",
        next: "return"
      }],
      '@stylistic/key-spacing': ['error', {
        afterColon: true
      }],
      'react/jsx-max-props-per-line': ['error', {
        maximum: 1
      }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true
      }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', {
        null: 'ignore'
      }],
      'import/order': ['error', {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'internal',
          [
            'parent',
            'sibling',
            'index'
          ],
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }],
      'import/newline-after-import': ['error', { count: 1 }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
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
      }],
      'newline-destructuring/newline': ['error', {items: 2}]
    }
  }
]);
