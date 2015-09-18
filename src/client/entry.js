/**
 * Created by s_vinnik on 17.09.2015.
 */
/*
var React = require('react')
var Router = require('react-router')
var Routes = require('./routes/core-routes.src')

if (typeof document !== 'undefined') {
    var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
    Router.run(Routes, Router.HistoryLocation, function (Handler) {
        React.render(React.createElement(Handler, initialProps), document)
    })
}

module.exports = function render(locals, callback) {
    Router.run(Routes, locals.path, function (Handler) {
        var html = React.renderToString(React.createElement(Handler, locals))
        callback(null, '<!DOCTYPE html>' + html)
    })
}*/

import React from "react";
import Router from "react-router";
import routes from "../routes/core-routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler />, document.getElementById('app'));
});