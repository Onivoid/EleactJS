const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new HtmlWebPackPlugin({
   title: "Reactron",
   template: "./src/index.html",
   filename: "./index.html"
  }),
   new MiniCssExtractPlugin()
];
