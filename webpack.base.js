// const BrotliPlugin = require("brotli-webpack-plugin");
// const CompressionPlugin = require('compression-webpack-plugin');

// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // mode: 'development',
  mode: 'production',


  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   },
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true // set to true if you want JS source maps
  //     }),
  //     new OptimizeCSSAssetsPlugin({})
  //   ]
  // },


  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // })
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
  ],


  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader'
          },
          // Extra Loaders eg. SASS 
          // 'postcss-loader'
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}