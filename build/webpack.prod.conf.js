var config = require('../config');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var statsPlugin = require('stats-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = merge(baseConfig, {
	profile: true,
	output: {
		filename: path.posix.join(config.build.assetsSubDirectory, 'js/[name].[chunkhash].js'),
		// chunkFilename: '[id]'
	},
	// controls if and how source maps are generated.
	devtool: config.build.jsSourceMap ? 'source-map' : false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractTextPlugin.extract({
					use: ['css-loader'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(scss|sass)$/,
				use: extractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'], //right to left~~!!
					fallback: 'style-loader'
				})
			},
			{
				test: /\.less$/,
				use: extractTextPlugin.extract({
					use: ['css-loader', 'less-loader'], //right to left~~!!
					fallback: 'style-loader'
				})
			}
		]
	}, 
	plugins: [
		new webpack.DefinePlugin({
			// http://vuejs.github.io/vue-loader/en/workflow/production.html
			// short-circuits all Vue.js warning code
			'process.env': {
		        NODE_ENV: '"production"'
		    }
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	},
		// 	sourceMap: true
		// }),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'index.html',
			inject: true,
			// favicon: '',
			minify: {
				// removeComments: true,
				// collapseWhitespace: true,
				// removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
	    }),
	    // extract css into its own file
		new extractTextPlugin({
			filename: path.posix.join(config.build.assetsSubDirectory, 'css/[name].[contenthash].css')
		}),
		// Compress extracted CSS. We are using this plugin so that possible
	    // duplicated CSS from different components can be deduped.
	    new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
	    // split vendor js into its own file
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				// any required modules inside node_modules are extracted to vendor
				return (
					module.resource && /\.js$/.test(module.resource) &&
					module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
				)
			}
		}),
		// extract webpack runtime and module manifest to its own file in order to
		// prevent vendor hash from being updated whenever app bundle is updated
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new statsPlugin('stats.json', 'verbose')
	]
});