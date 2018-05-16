var path = require('path');
var webpack = require('webpack');

const src = path.resolve(__dirname, '..', 'src');
const build = path.resolve(__dirname, '..', 'build');

module.exports = { 
  entry: {
    src: path.join(src, 'imgurp.js')
  },

  output: {
    path: build,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      src,
      path.join(__dirname, '..', 'node_modules'),
    ],
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
}
