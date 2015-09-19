/**
 * Created by dis_name_pc on 17.09.2015.
 */
import express from "express";
import React from "react";
import Router from "react-router";
import  bodyParser from 'body-parser';
import  request  from 'request';
import  HtmlProcessor  from '../html_processing/html_processor';
import routes from "../routes/core-routes";
import q from 'q';
const app = express();
const jsonParser = bodyParser.json();
var processor, allowCrossDomain, urls;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
/*allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,Content-Type, Accept,X-Requested-With');
    next();
};
app.use(allowCrossDomain);*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    Router.run(routes, req.url, Handler => {
        let content = React.renderToString(<Handler />);
        res.render('index', {content: content});
    });
});
app.post('/api/load', jsonParser, function (req, res) {
    processor = new HtmlProcessor();
    urls = [req.body.firstUrl, req.body.secondUrl];
    if (urls) {
        console.log(urls);
        processor.processPages(urls).then(function (data) {
            console.log('processed');
            res.send(data);
        });
    }
});


var server = app.listen(3000, function () {

});