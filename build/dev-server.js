require('./check-version')();

var config = require('../config/index');
var devConfig = require('./webpack.dev.conf');
var express = require('express');
var webpack = require('webpack');
var path = require('path');
var chalk = require('chalk');
var opn = require('opn');

var app = express();
var compiler = webpack(devConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    quiet: true
});
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false
});

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use('/assets', express.static('src/assets'));

var port = config.dev.port;
var url = 'http://localhost:' + port;
var server = app.listen(port);

var autoOpenBrowse = config.dev.autoOpenBrowse;

console.log(chalk.green('> Starting dev server...'));
devMiddleware.waitUntilValid(function(){
    console.log(chalk.green('> Listening at ' + url + '\n'));
    console.log(chalk.green("server " + staticPath  + " to ./static"));
    if(autoOpenBrowse){
        opn(url, {app: ['google chrome', '--incognito']}); //google chrome/safari/firefox
    }
});