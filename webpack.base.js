module.exports = {
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader'
          },
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