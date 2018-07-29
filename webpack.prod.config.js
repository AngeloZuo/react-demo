const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const port = 9090;

module.exports = {
  mode: "production",
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: "./app",
    port: port
  },
  entry: [path.resolve(__dirname, "app/index.jsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, "app"),
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "app"),
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: `http://localhost:${port}` })
  ]
};
