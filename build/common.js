const path = require('path');
const webpack = require('webpack');
const HtmlWebpaclPlugin = require('html-webpack-plugin');
const { entryBaseFile, htmlBasePlugin } = require('./base');
const spritesPlugins = require('./spritesmith');

module.exports = {
  entry: {
    ...entryBaseFile,
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'js/[name].[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: 'ts-loader',
          options: {

          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // shimming this指向window
      // {
      //   test: require.resolve('../src/index.js'),
      //   use: 'imports-loader?wrapper=window',
      // },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, '../src'),
      "@component": path.resolve(__dirname, '../src/component'),
      "@pages": path.resolve(__dirname, '../src/pages'),
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      _join: ['lodash/join'], // 提供全局的_join方法
    }),
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    }),
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, '../index.html'),
      chunks: ['main'],
    }),
    ...htmlBasePlugin,
    ...spritesPlugins,
  ],
  // optimization: {
  //   splitChunks: {

  //   }
  // }
}