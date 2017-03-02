const webpack = require('webpack');
const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",

                // include: [
                //     path.resolve(__dirname, "game"),
                // ],
                exclude: [
                    /(node_modules)/,
                ],

                // test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test:/\.less$/,
                exclude:'/node_modules',
                loader:"style!css!less"
            }
        ]
    },
    entry: {
        "index": ["./duel/demo"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: { inline: true },
    devtool: 'source-map'
}