/**
 * Created by dis_name_pc on 16.09.2015.
 */
import React from 'react';
import SpecRow from './ProductCharRow';
import MainRow  from'./ProductMainRow';
import   { Table } from'react-bootstrap';

var ProductsTable = React.createClass({

    render: function () {
        var rows, mainRows, products;
        rows = [];
        mainRows = [];
        products = this.props.products;
        if (products && products.specs) {
            mainRows.push(<MainRow product1={products.product1} product2={products.product2}/>);
            this.props.products.specs.forEach(function (spec) {
                rows.push(<SpecRow name={spec.name} text1={spec.specText1} text2={spec.specText2}/>);
            });
        }
        return (
            <Table striped condensed hover>
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