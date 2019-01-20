var path = require('path');
var entryPointfetcher = require('./build/entryPointFetcher.js');
var ROOT = __dirname;
var JS_ROOT = path.resolve(ROOT, 'frontend');
var desktopEntries = entryPointfetcher(JS_ROOT, 'entries/desktop/**/*.js');

module.exports = {
  entry: desktopEntries,
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(ROOT, 'dist/js-chunks'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/wp-content/themes/Badminton/dist/js-chunks/',

  },
  resolve: {
    modules: [
      JS_ROOT,
      'node_modules'
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', "es2015"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  mode: 'development',
}
