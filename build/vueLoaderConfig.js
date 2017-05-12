var config = require('../config');
var extractTextPlugin = require('extract-text-webpack-plugin');

var subConfig = process.env.NODE_ENV === 'production' ? config.build : config.dev;
var cssMinimize = subConfig.cssMinimize;
var cssSourceMap = subConfig.cssSourceMap;
var cssExtract = subConfig.cssExtract;

function generateLoaders(loader, loaderOptions){
	var cssLoader = {
		loader: 'css-loader',
		options: {
			minimize: cssMinimize,
			sourceMap: cssSourceMap
		}
	}
	var loaders = [];
	loaders.push(cssLoader);

	if(loader){
		loaders.push({
			loader: loader + '-loader',
			options: Object.assign({}, loaderOptions, {
				sourceMap: cssSourceMap
			})
		});
	}

	if(cssExtract){
		return extractTextPlugin.extract({
			use: loaders,
			fallback: 'vue-style-loader'
		});
	}else{
		return ['vue-style-loader'].concat(loaders);
	}
}
module.exports = {
	loaders: {
		css: generateLoaders(),
		postcss: generateLoaders(),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		less: generateLoaders('less'),
		scss: generateLoaders('scss')
	}
}