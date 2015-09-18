/*
 import React from 'react/addons';
 import ProductsTable from './ProductsTable';
 import ProductComparerBar from './ProductComparerBar';
 class ProductsComparer extends React.Component {
 render() {
 return (<div> <ProductComparerBar /> <ProductsTable /> </div>);
 }
 }

 export default ProductsComparer;*/

var React = require('react');
/*require('../../public/styles/bootstrap.css');*/
var ProductsTable = require('./ProductsTable');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var ProductComparerBar = require('./ProductComparerBar');
var ProductsComparer = React.createClass({
    tabledata: {},
    onDataRecieved: function (data) {
        this.tabledata = data;
    },
    render: function () {
        return (<Grid justified> <Row><ProductComparerBar callbackParent={this.onDataRecieved}/>
            <ProductsTable data={this.tabledata}/> </Row></Grid>);
    }
});
module.exports = ProductsComparer;