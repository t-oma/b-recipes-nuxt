/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  bracketSameLine: false,
  useTabs: false,
  printWidth: 80,
  semi: true,
  singleAttributePerLine: true,
  trailingComma: "all",
  overrides: [
    {
      files: "*.vue",
      options: {
        parser: "vue",
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
