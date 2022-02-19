const path = require('path');
const globImporter = require('node-sass-glob-importer');
const webpackDir = path.resolve(__dirname, '../webpack');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/**/*.stories.jsx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // SCSS.
    config.module.rules.push({
      test: /\.scss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config: path.resolve(webpackDir, 'postcss.config.js'),
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      ],
    });

    // JS.
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['import-glob', 'babel-loader'],
    });
    return config;
  },
};
