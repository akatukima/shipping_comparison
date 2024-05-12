import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptEslintParser from '@typescript-eslint/parser';
import vueEslintParser from 'vue-eslint-parser';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // eslint-disable-next-line import/no-named-as-default-member
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  ...compat.extends(
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-prettier',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ),
  {
    plugins: {
      typeScriptEslintPlugin,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typeScriptEslintParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
