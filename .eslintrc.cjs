module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.cjs',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
