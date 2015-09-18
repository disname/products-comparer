/**
 * Created by dis_name_pc on 16.09.2015.
 */
/*
import React from 'react';

class ProductCharRow extends React.Component {
    render() {
        return <td>this.props.char_text</td>;
    }
}

export default ProductCharRow;
*/

var React = require('react');
var ProductCharRow = React.createClass({
    render: function(){
        return (<tr><td>{this.props.name}</td><td>{this.props.specText1}</td><td>{this.props.specText2}</td></tr>);
    }
});
module.exports=ProductCharRow;