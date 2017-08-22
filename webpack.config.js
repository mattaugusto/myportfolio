var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: path.join(__dirname, './assets/js'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        
      }
    ]
  }
};