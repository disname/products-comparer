/**
 * Created by dis_name_pc on 16.09.2015.
 */
/*import React from 'react';*/

var React = require('react'), Row = require('./ProductCharRow'), MainRow = require('./ProductMainRow'),
    Table=require('react-bootstrap').Table,ProductsTable;
 ProductsTable = React.createClass({

    render: function () {
        var rows = [], mainRows = [], products = this.props.products;
        if (products && products.specs) {
            mainRows.push(<MainRow product1={products.product1} product2={products.product2}/>);
            this.props.products.specs.forEach(function (spec) {
                rows.push(<Row name={spec.name} text1={spec.specText1} text2={spec.specText2}/>);
            });
        }
        return (
            <Table striped  condensed hover>
                <thead>
                {mainRows}
                </thead>
                <tbody>
                {rows}
                </tbody>
            </Table>
        );
    }
});
module.exports = ProductsTable;