/**
 * Created by dis_name_pc on 16.09.2015.
 */
/*import React from 'react';

class ProductsTable extends React.Component {
    render()  {
    var rows = [];
   // var lastCategory = null;
   /!* this.props.products.forEach(function(product) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });*!/
    return (
        <table>
            <thead>
            <tr>
                <th>Specs</th>
                <th>Product1</th>
                <th>Product2</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
}

export default ProductsTable;*/

var React = require('react');
var ProductsTable = React.createClass({
    render: function(){
        var rows=[];
        return (
            <table>
                <thead>
                <tr>
                    <th>Specs</th>
                    <th>Product1</th>
                    <th>Product2</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});
module.exports=ProductsTable;