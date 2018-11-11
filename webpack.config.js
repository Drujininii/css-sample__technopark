var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dir/main.js'
    },
    watch: true,
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
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
        })
    ]
};