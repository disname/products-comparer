/**
 * Created by dis_name_pc on 16.09.2015.
 */
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./js/routes-data')

module.exports = {
    entry: './js/entry.js',
    output: {
        filename: 'app.js',
        path: __dirname,
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'jsx-loader', 'babel-loader'],
                exclude: /node_modules/
            },
          /*  {
                test: /\.scss$/,
                loaders: [ 'css', 'sass']
            },*/
            { test: /\.json$/, loader: 'json-loader' }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
/*    node:{
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },*/
    plugins: [
        new StaticSiteGeneratorPlugin('app.js', data.routes, data)
    ]
/*    target:'node'*/
};