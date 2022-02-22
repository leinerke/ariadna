const path = require('path');
const glob = require('glob');
const globImporter = require('node-sass-glob-importer');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const rootDir = path.resolve(__dirname, '../');

const entry = () => {
  const entries = {};

  entries.app = './src/index.js';

  glob.sync(path.resolve(rootDir, 'src/components/**/!(_)*.scss')).forEach(file => {
    const filePath = file.split('components/')[1];
    let newFilePath = `css/${filePath}`.replace('.scss', '');
    entries[newFilePath] = file;
  });

  return entries;
};

module.exports = {
  entry: entry(),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(?!\.stories)\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['import-glob', 'babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
      {
        test: /\.(svg|gif|png|jpg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
      ],
    }),
  ],
};