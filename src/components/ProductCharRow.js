import React from 'react';
var ProductSpecRow = React.createClass({
    render: function () {
        return (<tr>
            <td>{this.props.name}</td>
            <td>{this.props.text1}</td>
            <td>{this.props.text2}</td>
        </tr>);
    }
});
module.exports = ProductSpecRow;