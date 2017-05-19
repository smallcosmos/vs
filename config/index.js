var path = require('path');
module.exports = {
	build: {
		env: {
			NODE_ENV: '"production"'
		},
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		cssMinimize: true,
		cssSourceMap: true,
		cssExtract: true,
		jsSourceMap: false,
	},
	dev: {
		env: {
			NODE_ENV: '"development"'
		},
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		cssMinimize: false,
		cssSourceMap: false,
		cssExtract: false,
		jsSourceMap: false,
		port: 1234,
		autoOpenBrowse: true
	}
}