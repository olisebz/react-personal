import globals from "globals";
import eslintJsConfig from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactRecommended from "eslint-plugin-react/configs/recommended.js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const config = [
  eslintJsConfig.configs.recommended, // Standard ESLint-Regeln
  pluginReactRecommended, // Empfohlene Regeln für React
  prettierConfig, // Integration der Prettier-Regeln
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Prettier-Regeln als Fehler behandeln
      "react/react-in-jsx-scope": "off", // React 17+ benötigt kein `import React` mehr
      "react/prop-types": "off", // Deaktiviert die Regel für Prop-Typen, wenn TypeScript verwendet wird
    },
    settings: {
      react: {
        version: "detect", // Automatische Erkennung der React-Version
      },
    },
  },
];

export default config;
