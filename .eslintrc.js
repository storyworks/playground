module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    semi: ["error", "always"],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "comma-dangle": ["error", "only-multiline"],
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
