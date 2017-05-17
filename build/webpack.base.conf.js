var config = require('../config');
var path = require('path');
var eslintFriendlyFormatter = require('eslint-friendly-formatter');
var vueLoaderConfig = require('./vueLoaderConfig');
var subConfig = process.env.NODE_ENV === 'production' ? config.build : config.dev;

function resolve(dir){
	return path.resolve(__dirname, '..', dir);
}
module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: subConfig.assetsRoot,
		filename: '[name].js',
		publicPath: subConfig.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				use: {
					loader: 'eslint-loader',
					options: {
						formatter: eslintFriendlyFormatter
					}
				},
				enforce: 'pre',
				include: [resolve('src')]
			},
			{
		        test: /\.vue$/,
		        use: {
		        	loader: 'vue-loader',
		        	options: vueLoaderConfig
		    	}
		    },
			{
        		test: /\.js$/,
        		use: 'babel-loader',
        		include: [resolve('src')]
			},
			{
				test: /\.less$/,
				use: 'less-loader'
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'] //right to left~~!!
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'] //right to left~~!!
			},
			{
				test: /\.(jpe?g|png|gif|ico|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, //8k
						name: path.posix.join(subConfig.assetsSubDirectory, 'img/[name].[hash:8].[ext]')
					}
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: path.posix.join(subConfig.assetsSubDirectory, 'font/[name].[hash:8].[ext]')
					}
				}
			}
		]
	}
}