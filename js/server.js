/**
 * Created by dis_name_pc on 16.09.2015.
 */
require('babel/register');
var express = require('express');
var React = require('react');
var jsx = require('node-jsx');
var app = express();

jsx.install();


var ProductsComparerViewFactory = React.createFactory(require('./components/ProductsComparer'));


//app.use('/', function(req, res) {
//
//    res.setHeader('Content-Type', 'text/html');
//    res.end(React.renderToStaticMarkup(
//        React.DOM.body(
//            null,
//            React.DOM.div({
//                id: 'container',
//                dangerouslySetInnerHTML: {
//                    __html: React.renderToString(React.createElement(ProductsComparerView, {
//
//                    }))
//                }
//            }),
//            React.DOM.script({
//                'id': 'initial-data',
//                'type': 'text/plain',
//                'data-json': JSON.stringify()
//            }),
//            React.DOM.script({
//                src: '/public/app.js'
//            })
//        )
//    ));
//});
app.get('/', function(req, res) {
    var markup = React.renderToString(ProductsComparerViewFactory());
    res.render('index', { html: markup });
});
var server = app.listen(3333, function() {
    var addr = server.address();
    console.log('Listening @ http://%s:%d', addr.address, addr.port);
});