var baseConfig = require('./webpack.base.conf');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

Object.keys(baseConfig.entry).forEach(function(name){
    baseConfig.entry[name] = ['./build/dev-client.js'].concat(baseConfig.entry[name]);
});

module.exports = merge(baseConfig, {
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] //right to left~~!!
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'] //right to left~~!!
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});