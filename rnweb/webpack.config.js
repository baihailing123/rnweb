const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');

module.exports = {
	mode: 'development',
	entry:"./index.web.js",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	module:{
		rules:[{
			test: /\.m?jsx?$/,
      		exclude: /(node_modules|bower_components)/,
      		use: {
        		loader: 'babel-loader'
      		}
		},{
        	// 支持图片等静态文件的加载
        	test: /\.(gif|jpe?g|png|svg)$/,
        	use: {
				  loader: 'file-loader',
        	}
      	},]
	},
	resolve: {
		extensions: ['.web.js','.js', '.json', '.android.js', '.ios.js'],
		alias: { 'react-native$': 'react-native-web' },
		modules: ['web_modules', 'node_modules'],
  	},
  	plugins: [
  	   new RemoveWebpackPlugin([path.resolve(__dirname, "dist")]),
    	//可以和entry文件联合配置
    	new HtmlWebpackPlugin({
      		title: '',
      		template: './index.html',
    	})
    ]
}