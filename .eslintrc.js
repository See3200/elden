module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "i18next"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:i18next/recommended"
      ],

      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
    {
      //this block-score is not required (no translations in tests)
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      }
    }
  ],
  rules: {
    "quotes": [2, "double", { "avoidEscape": true }],
    "indent": [2, 2],
    "lines-between-class-members": "off",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "max-lines-per-function": ["error", 200],
    //"@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "warn",
    "no-floating-promises": "off",
    "i18next/no-literal-string": ["error", 
      { 
        markupOnly: true,
        ignoreAttribute: ["data-testid"]
      }],
    "max-len": ["error", { code: 100, ignoreComments: true }],
    "@typescript-eslint/no-misused-promises": [2, {
      "checksVoidReturn": {
        "attributes": false
      }
    }]
  }
}
