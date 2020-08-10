const path = require('path');
const webpackConfig = require('./webpack.config.js');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除打包文件

module.exports = webpackMerge(webpackConfig, {
  mode: 'production',
  devtool: 'cheap-eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vueBase: {
          name: 'vueBase',
          test: (module) => {
            return /vue|vuex/.test(module.context)
          },
          chunks: 'initial',
          priority: 10,
        },
        iviewBase: {
          name: 'iviewBase',
          test: (module) => {
            return /view-design/.test(module.context)
          },
          chunks: 'initial',
          priority: 9,
        },
        vendors: {
          chunks: "all",
          priority: 8, // 权重
          test: /[\\/]node_modules[\\/]/
        },
        common: {
          chunks: 'initial',
          priority: 5,
          minSize: 0,
          minChunks: 2, //抽离公共代码时，这个代码块最小被引用的次数
        }
      }
    },
    runtimeChunk: {
      name: entrypoint => `manifest.${entrypoint.name}`
    },
    minimizer: [
      new UglifyJsPlugin({//压缩js
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCssAssetsPlugin({})
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/static'),
      to: path.resolve(__dirname, '../dist/static')
    }]),
    // new ParallelUglifyPlugin({
    //   uglifyJs: {
    //     output: {
    //       beautify: false,
    //       comments: false,
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_console: true,
    //       collapse_vars: true,
    //       reduce_vars: true
    //     }
    //   }
    // }),
  ],
})