const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const port = 9090;
// function resolvePath(relativePath) {     return path.join(__dirname,`
// relativePath); }

module.exports = {
    mode: 'production',
    entry: [
        path.resolve(__dirname, './app')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new OpenBrowserPlugin({url: `http://localhost:${port}`})
    ]
};