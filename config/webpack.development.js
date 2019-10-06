const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = (file = '') => path.join(__dirname, '../', file);

const output = root('public');

module.exports = {
  entry: {
    application: [
      'react-hot-loader/patch',
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
      exclude: [/node_modules(?!\/webpack-dev-server)/, /public/],
      resolve: { extensions: ['.js', '.jsx'] },
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { modules: false }], '@babel/react'],
        },
      }],
    }],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
  devServer: {
    contentBase: root('src/application'),
    clientLogLevel: 'info',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000,
  },
};
