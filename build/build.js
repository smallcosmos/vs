require('./check-version.js')();

process.env.NODE_ENV = 'production';

var config = require('../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf.js');
var path = require('path');
var rm = require('rimraf');
var ora = require('ora');
var chalk = require('chalk');

var spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
	if(err) throw err;
	webpack(webpackConfig, (err, stats) => {
		spinner.stop();
		if(err) throw err;
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n\n');

		console.log(chalk.cyan('	Build complete.\n'));
		console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' +
      								'  Opening index.html over file:// won\'t work.\n'));
	});
});