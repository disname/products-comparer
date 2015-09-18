/**
 * Created by dis_name_pc on 16.09.2015.
 */
/*import React from 'react';*/

var React = require('react');
var ProductsTable = React.createClass({
    getInitialState: function(){
        return ({
            rows: []
        })
    },
    render: function(){
        var data = this.state.rows;
        if(this.props.products && this.props.products.specs){
        this.props.products.specs.forEach(function(product) {
                rows.push(<ProductCharRow name={product.name} text1={product.specText1} text2={product.specText2} />);
        });}
        return (
            <table>
                <thead>
                <tr>
                    <th>Specs</th>
                    <th>Product1</th>
                    <th>Product2</th>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        );
    }
});
module.exports=ProductsTable;