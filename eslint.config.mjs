import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, prettier: eslintPluginPrettier },
    extends: ["js/recommended", eslintConfigPrettier],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "prettier/prettier": "error",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  globalIgnores([
    "dist/*",
    "webpack.config.js",
    "jest.config.js",
    "babel.config.js",
    "node_modules/*",
    "storybook-static/*",
    "*.config.js",
    "*.config.mjs",
  ]),
]);
