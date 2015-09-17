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
var ProductsTable = require('./ProductsTable');
var ProductComparerBar = require('./ProductComparerBar');
var ProductsComparer = React.createClass({
    render: function(){
        return (<div> <ProductComparerBar /> <ProductsTable /> </div>);
    }
});
module.exports=ProductsComparer;