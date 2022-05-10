const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-nested-ancestors': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    },
    cssnano: {},
  },
}
