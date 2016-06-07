var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    devtool: 'source-map',
    output: {
        path: './',
        filename: 'script.js',
    },
    module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } }
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
}
