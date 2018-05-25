var path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.resolve(__dirname, '..', 'src');
const build = path.resolve(__dirname, '..', 'build');

module.exports = { 
  entry: {
    imgurp: path.join(src, 'imgurp')
  },

  output: {
    path: build,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      src,
      path.join(__dirname, 'node_modules'),
    ],
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },

  plugins: [
    new CopyWebpackPlugin(['src/manifest.json'])
  ],

  mode: 'production'
}
