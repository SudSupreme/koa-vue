const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'mixin-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }, {
        test: /\.vue$/,
        loaders: [
          'vue-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg)$/,
        loaders: [
          'file-loader'
        ]
      }, {
        test: /js\/\.js$/,
        loaders: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.client_src('index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      },
      debug: true
    }),
    new CopyWebpackPlugin([{
      from: path.join(process.cwd(), conf.paths.client_src, 'img'),
      to: path.join(process.cwd(), conf.paths.client_dist, 'img')
    }]),
    new CopyWebpackPlugin([{
      from: path.join(process.cwd(), conf.paths.client_src, 'js'),
      to: path.join(process.cwd(), conf.paths.client_dist, 'js')
    }])
  ],
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.client_dist),
    filename: 'index.js'
  },
  entry: `./${conf.path.client_src('index')}`
};
