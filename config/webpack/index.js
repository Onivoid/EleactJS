const webpack = require('webpack');
const path = require('path');
const plugins = require('./plugins.js');
const loaders = require('./loaders.js');
module.exports = {
 entry: './src/index.js',
 target: 'electron-renderer',
 output: {
  path: path.resolve(__dirname, '../../build'),
  publicPath: './',
  filename: 'bundle.js'
 },
 module: {
  rules: loaders,
 },
 plugins: plugins,
 resolve: {
  extensions: ['.js','.jsx']
 }
}
