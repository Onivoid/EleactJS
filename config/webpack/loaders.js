const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.(jsx|js)$/,
    exclude: [
     /node_modules/,
     /.json?/
    ],
    use: {
     loader: 'babel-loader',
     query: {
      presets: ["env","react"]
     }
    }
  },
  {
    test: /\.(scss|sass)$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  }
]
