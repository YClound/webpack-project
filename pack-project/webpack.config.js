var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// --config,chunkhash,publicPath
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/script/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: 'index.ejs',
            title: 'webpack is good',
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格
            }
        })
    ]
}