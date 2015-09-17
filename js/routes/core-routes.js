/**
 * Created by dis_name_pc on 16.09.2015.
 */
var React = require('react/addons');
var express=require('express');

var coreRoutes = express.Router();
coreRoutes.get('/', function (req, res, next) {
    res.render('index');
})
coreRoutes.get('*', function (req, res, next) {
    res.render('index');
})
coreRoutes.use(function(req, res, next) {

});

module.exports.coreRoutes = coreRoutes;