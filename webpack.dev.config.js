var path = require('path');
const merge = require('webpack-merge');
var webpackConfig = require('./webpack.config.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var pathsToClean = [
  'dist',
];

var cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false
};


module.exports = merge(webpackConfig, {
  plugins: [
    // We dont need analyzer as it take longer time
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ],

});

