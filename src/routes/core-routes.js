/**
 * Created by dis_name_pc on 16.09.2015.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var ProductsComparer = require('../components/ProductsComparer');

var Routes = (
    <Route handler={ ProductsComparer } path='/'/>
);
module.exports = Routes;