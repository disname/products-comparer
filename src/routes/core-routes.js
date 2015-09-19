/**
 * Created by dis_name_pc on 16.09.2015.
 */
var React = require('react'),
 Router = require('react-router'),
 Route = Router.Route,
 DefaultRoute = Router.DefaultRoute,ProductsComparer= require('../components/ProductsComparer'),Routes;

 Routes = (
    <Route handler={ ProductsComparer } path='/'/>
);
module.exports = Routes;