const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPluginConfig = new ExtractTextPlugin("style.css");

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: "assets/[hash].[ext]"
        }
      }
    ],
  },
  output: {
    filename: 'build.js',
    path: __dirname + '/build'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
};
