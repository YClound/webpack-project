const path = require('path');
const webpack = require('webpack');
const HtmlWebpaclPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfill: path.resolve(__dirname, '../src/polyfill.js'),
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [{
          loader: 'babel-loader'
        }]
      },
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
    new webpack.ProvidePlugin({
      // _: 'lodash'
      _join: ['lodash/join'],
    }),
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    }),
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}