const fs = require('fs');
const path = require('path');
const HtmlWebpaclPlugin = require('html-webpack-plugin');

const baseChunks = [];
const baseFiles = fs.readdirSync(path.resolve(__dirname, '../src/base'));
let entryBaseFile = {};

baseFiles.forEach((item, index) => {
  if (/\.(js|jsx|ts|tsx)$/.test(item)) {
    const name = item.split(/\.(js|jsx|ts|tsx)/)[0] || `appBase${index}`;
    entryBaseFile[name] = path.resolve(__dirname, `../src/base/${item}`);
    baseChunks.push(name);
  }
})

const loaderChunks = [];
const loaderFiles = fs.readdirSync(path.resolve(__dirname, '../src/loader'));
loaderFiles.forEach((item, index) => {
  if (/\.(js|jsx|ts|tsx)$/.test(item)) {
    const name = item.split(/\.(js|jsx|ts|tsx)/)[0] || `appLoader${index}`;
    entryBaseFile[name] = path.resolve(__dirname, `../src/loader/${item}`);
    loaderChunks.push(name);
  }
})

module.exports = {
  entryBaseFile,
  htmlBasePlugin: [
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'base.html',
      chunks: baseChunks,
    }),
    new HtmlWebpaclPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'loader.html',
      chunks: loaderChunks,
    })
  ]
}