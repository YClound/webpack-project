const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = webpackMerge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-eval-source-map',
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/static'),
      to: path.resolve(__dirname, '../dist')
    }]),
  ],
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true,
      // }),
      new ParallelUglifyPlugin({
        cacheDir: '.cache/',
        uglifyJs: {
          output: {
            comments: false,
            beautify: false
          },
          compress: {
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
})