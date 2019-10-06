const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = (file = '') => path.join(__dirname, '../', file);

const output = root('public');

module.exports = {
  entry: {
    application: [
      root('src/application/index.js'),
    ],
  },
  output: {
    path: output,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /public/],
      resolve: { extensions: ['.js', '.jsx'] },
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { modules: false }], '@babel/react'],
        },
      }],
    }],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Scratch Book',
      template: root('src/application/view/index.html'),
    }),
  ],
};
