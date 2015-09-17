/**
 * Created by dis_name_pc on 16.09.2015.
 */
module.exports = {
    entry: {
        client:[ 'webpack-dev-server/client?http://localhost:8080','./js/components/ProductsComparer.js']
  /*      server:"./js/server.js"*/
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'public/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx', 'babel'],
                exclude: /node_modules/,

            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};