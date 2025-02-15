import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';
import cspell from '@cspell/eslint-plugin';

export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended-typescript-error'],
  {
    plugins: { '@cspell': cspell },
    rules: { '@cspell/spellchecker': 'error' },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: { '@typescript-eslint': ts },
    rules: ts.configs.strict.rules,
  },
  {
    ignores: ['**/dist', 'packages/examples', 'packages/cpset/testlib'],
  },
];
