const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
 title: "Reactron",
 template: "./src/index.html",
 filename: "./index.html"
});

module.exports = {
 entry: './src/index.js',
 target: 'electron-renderer',
 output: {
  path: path.resolve(__dirname, 'build'),
  publicPath: './',
  filename: 'bundle.js'
 },
 module: {
  rules: [
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
  },{
    test: /\.(scss|sass)$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }
  ]
 },
 plugins:[
  htmlPlugin,
  new MiniCssExtractPlugin(),
 ],
 resolve: {
  extensions: ['.js','.jsx']
 }
}
