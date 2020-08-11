const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./common');

module.exports = merge({}, webpackCommon, {
    mode: 'development',
    devServer: {
        // open: true,
        port: 1234,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        inline: true,
    }
})