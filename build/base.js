const fs = require('fs');
const path = require('path');
const HtmlWebpaclPlugin = require('html-webpack-plugin');

const chunks = [];
const files = fs.readdirSync(path.resolve(__dirname, '../src/base'));
let entryBaseFile = {};

files.forEach((item, index) => {
  const name = item.split('.js')[0] || `app-${index}`;
  entryBaseFile[name] = path.resolve(__dirname, `../src/base/${item}`);
  chunks.push(name);
})

module.exports = {
  entryBaseFile,
  htmlBasePlugin: new HtmlWebpaclPlugin({
    template: path.resolve(__dirname, '../index.html'),
    filename: 'base.html',
    chunks,
  })
}