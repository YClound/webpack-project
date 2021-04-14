const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dev'),
  },
  optimization: {
    usedExports: true,
  }
})