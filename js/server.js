/**
 * Created by dis_name_pc on 16.09.2015.
 */
require('babel/register');
var express = require('express');
var React = require('react/addons');
var jsx = require('node-jsx');
var app = express();
var path=require('path');
var reactViews = require('express-react-views');
var routes = require('./routes/core-routes');
jsx.install();
var addr={port:8080};
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(routes.coreRoutes);
app.listen(addr.port);
