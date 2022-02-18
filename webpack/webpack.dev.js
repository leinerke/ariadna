const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const rootDir = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(rootDir, 'public'),
    },
    allowedHosts: 'all',
    compress: true,
    port: 3000,
    historyApiFallback: {
      index: '/',
    },
  },
});
