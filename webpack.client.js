const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // mode: 'production',
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    // filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './public')
  }
}

module.exports = merge(baseConfig, config);