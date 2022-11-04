module.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "extends": [
    "next/core-web-vitals",
    "next",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "parserOptions": {
    "parser": '@typescript-eslint/parser',
    "ecmaVersion": 2020,
  },
  "plugins": ['unused-imports'],
  "rules": {
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "unused-imports/no-unused-imports": 'warn',
    "no-duplicate-imports": 'error',
    "semi": ['error', 'never'],
    "quotes": ['error', 'single'],
  }
}
