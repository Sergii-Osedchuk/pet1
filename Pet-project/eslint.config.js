import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...fixupConfigRules(pluginReactConfig),
	{
		env: {
			browser: true,
			es2021: true,
		},
		extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: ['react'],
		rules: {},
	},
];
