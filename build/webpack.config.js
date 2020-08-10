const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); // html模板引入
const VuewLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Happypack = require('happypack');
const os = require('os');
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length });
const devMode = process.argv.indexOf('--mode=production') === -1;

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/app.js'),
    // main: path.resolve(__dirname, '../static/utils/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [path.resolve(__dirname, '../src')],
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: [{
          loader: 'happypack/loader?id=happyBabel'
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../dist/css/",
              hmr: devMode
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../static')],
        use: [
          {
            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../dist/css/",
              hmr: devMode
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components'),
    },
    extensions: ['*', '.js', '.json', '.vue']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      chunks: ['app', 'vue-vendor', 'iView-vendor'],
      minify: {
          removeComments: true,//删除注释
          collapseWhitespace: true,//删除空格
      }
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new VuewLoaderPlugin(),
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../public/index.html'),
    //   filename: 'public.html',
    //   chunks: ['main'], // 与入口文件对应的模块名
    // }),
    new Happypack({
      id: 'happyBabel',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "modules": false
              }]
            ],
            cacheDirectory: true
          }
        },
      ],
      threadPool: happyThreadPool
    })
  ]
}