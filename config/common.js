const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log(process.env.NODE_ENV)
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.ts'),
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
            },
            // {
            //     test: /\.(sc|c)ss/i,
            //     use: [
            //         ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 
            //         'css-loader',
            //         'postcss-loader',
            //         'sass-loader',
            //     ],
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.(jpg|png|jpeg|gif)$/i,
            //     use: ['url-loader'],
            //     exclude: /node_modules/,
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     use: ['file-loader'],
            //     exclude: /node_modules/,
            // },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'main.css'
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ]
}