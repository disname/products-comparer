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
const app = express();
const jsonParser = bodyParser.json();
app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    Router.run(routes, req.url, Handler => {
        let content = React.renderToString(<Handler />);
        res.render('index', {content: content});
    });
});
app.post('/api/load', jsonParser, function (req, res) {

    var processor = new HtmlProcessor(), urls;

    urls = [req.body.firstUrl, req.body.secondUrl];
    if (urls) {
        processor.processPages(urls);
    }

    //  res.contentType('json');
    //  res.send({some: JSON.stringify({response: 'json'})});

});
app.use(express.static(__dirname + '/public'));
var server = app.listen(3000, function () {

});