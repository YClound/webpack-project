const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 9000,
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    index: 'index.html'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})