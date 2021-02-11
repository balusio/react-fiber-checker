const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  target: 'web',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: "[name].js.map"
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }), 
  ]
};
