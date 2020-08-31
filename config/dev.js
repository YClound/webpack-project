const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./common');

module.exports = merge({}, webpackCommon, {
    mode: 'development',
    devServer: {
        port: 1234,
        host: '0.0.0.0',
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        inline: true,
    }
})