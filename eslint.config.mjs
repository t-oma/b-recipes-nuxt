// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import vueJsAccessibility from "eslint-plugin-vuejs-accessibility";

export default withNuxt({
  // Type-aware rules for TypeScript files
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    "vue/html-self-closing": "off",

    // Basic TypeScript rules
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",

    // Type-aware rules (require parserOptions.project)
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",

    // General code quality rules
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
  },
})
  .prepend(vueJsAccessibility.configs["flat/recommended"])
  .overrideRules({
    "vuejs-accessibility/label-has-for": "off",
  });
