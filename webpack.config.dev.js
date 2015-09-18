/**
 * Created by dis_name_pc on 17.09.2015.
 */
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/client/entry'
    ],
    output: {
        path: __dirname + '/public/js/',
        filename: 'app.js',
        publicPath: 'http://localhost:8080/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js']
    },
    headers: [{"Access-Control-Allow-Origin": "*"},
        {"Access-Control-Allow-Headers": "Origin,Content-Type, Accept,X-Requested-With"},
        {"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"}],
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.css$/, loader: "style!css"},
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.woff2?$/, loader: "url-loader?prefix=fonts/&limit=5000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file-loader?prefix=fonts/" },
            { test: /\.eot$/, loader: "file-loader?prefix=fonts/" },
            { test: /\.svg$/, loader: "file-loader?prefix=fonts/" }
        ]
    }
}