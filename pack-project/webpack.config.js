var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// --config,chunkhash,publicPath,chunks指定多个页面的js文件，excludeChuncks
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
            title: 'webpack is good',
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格
            }
        })
    ]
}