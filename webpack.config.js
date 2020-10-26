var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isTouchSample = process.argv.includes('--touch_sample');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dir/main.js'
    },
    watch: true,
    mode: 'development',
    devServer: {
        openPage: isTouchSample ? 'touch_action.html' : 'index.html',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use:
                ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "postcss-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'index.css', disable: false, allChunks: true}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/touch_action.html',
            filename: 'touch_action.html'
        }),
    ]
};
