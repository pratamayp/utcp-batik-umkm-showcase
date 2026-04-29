// eslint.config.mjs
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(
  // Your custom ESLint rules can go here
  {
    rules: {
      "vue/multi-word-component-names": "off", // Often turned off when using shadcn/ui components
    },
  },
  // Add Prettier as the last config so it has the final say on formatting
  eslintPluginPrettierRecommended,
);
