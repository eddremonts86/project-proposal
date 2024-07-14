const { default: plugin } = require('tailwindcss')

module.exports = {
  singleQuote: true,
  semi: false,
  vueIndentScriptAndStyle: true,
  trailingComma: 'es5',
  htmlWhitespaceSensitivity: 'ignore',
  plugins: ['prettier-plugin-tailwindcss'],
}
