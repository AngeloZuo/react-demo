const webpack = require("webpack");
const path = require("path");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const port = 9090;

module.exports = {
  mode: "development",
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
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, "app"),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: `http://localhost:${port}`
    })
  ]
};
