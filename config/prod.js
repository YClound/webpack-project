const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommon = require('./common');

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ]
})
