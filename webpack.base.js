// const BrotliPlugin = require("brotli-webpack-plugin");
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CompressionPlugin({
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: true
    // })
    // new BrotliPlugin({
    //   test: /\.js$|\.css$|\.html$/,
    //   asset: '[path].br[query]',
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: true
    // })
  ]
}