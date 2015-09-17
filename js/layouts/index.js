/**
 * Created by dis_name_pc on 17.09.2015.
 */
import React from 'react';
var React = require('react');
var ProductsComparer = require('../components/ProductsComparer');
var DefaultLayout = require('../layouts/default');

var Index = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title} >
                <ProductsComparer/>
            </DefaultLayout>
        );
    }
});

module.exports = Index;