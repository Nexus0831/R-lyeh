require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// プラグイン
const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, './../public/index.html'),
  }),
  new webpack.DefinePlugin({
    PUBLIC_URL: JSON.stringify('/R-lyeh/'),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new UglifyJsPlugin()
];

console.log('--------------- release ---------------');

module.exports = {
  entry: path.join(__dirname, './../src/index.jsx'),
  output: {
    path: path.join(__dirname, './../docs'),
    filename: 'main.js',
    publicPath: './'
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      { test: /\.svg$/, use: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, use: 'url-loader?mimetype=application/font-woff' }
    ]
  }
};
