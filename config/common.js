const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.ts'),
        asyncApp: path.resolve(__dirname, '../src/asyncIndex.ts')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[hash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'] //引入文件时无需加以上后缀
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: ['ts-loader'],
                exclude: /node_modules/,
                include: [/src/]
            },
            {
                test: /\.(sc|c)ss/i,
                use: [
                    ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/i,
                use: ['url-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: ['file-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../static'),
                to: path.resolve(__dirname, '../dist/static'),
            }]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            chunks: ['app', 'asyncApp']
        }),
    ]
}