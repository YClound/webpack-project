var htmlWebpackPlugin = require('html-webpack-plugin');

// --config,chunkhash,publicPath
module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {
		path:  __dirname +'/dist',
		filename: 'src/script/[name].[chunkhash].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			title: 'webpack is good',
			minify: {
				removeComments: true,//删除注释
				collapseWhitespace: true,//删除空格
			}
		})
	]
}