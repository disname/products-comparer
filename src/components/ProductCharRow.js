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
        return <td>this.props.char_text</td>;
    }
});
module.exports=ProductCharRow;