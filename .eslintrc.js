module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    useJSXTextNode: true,
    project: "./tsconfig.json"
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "indent": ["error", 2],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "React", "argsIgnorePattern": "^_" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-curly-brace-presence": [1, { "props": "always", "children": "always" }],
    "react/no-multi-comp": [1, { "ignoreStateless": true }],
    "react/jsx-closing-bracket-location": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "import/first": 0,
    "import/prefer-default-export": 0
  },
};
