import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import { importPathGroups } from '../utils/constants.js';

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
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript
    ],
    plugins: {
      '@stylistic': stylistic,
      'newline-destructuring': newlineDestructuring
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.es2025
      },
      parser: tseslint.parser,
      parserOptions: {
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
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { after: true }],
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
      '@stylistic/padding-line-between-statements': ['error', {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }],
      '@stylistic/key-spacing': ['error', {
        afterColon: true
      }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true
      }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'max-lines': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
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
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
          'type'
        ],
        pathGroups: importPathGroups,
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
        distinctGroup: true,
        'newlines-between': 'always',
        warnOnUnassignedImports: true
      }],
      'import/newline-after-import': ['error', { count: 1 }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'newline-destructuring/newline': ['error', { items: 2 }]
    }
  }
]);
