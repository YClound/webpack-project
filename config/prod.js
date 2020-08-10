const { merge } = require('webpack-merge');
const webpackCommon = require('./common');

module.exports = merge(webpackCommon, {
    mode: 'production'
})