/**
 * Created by dis_name_pc on 19.09.2015.
 */
import React from 'react';
import { Thumbnail } from 'react-bootstrap';
var ProductMainRow;
ProductMainRow = React.createClass({
    render: function () {
        return (<tr>
            <th>
            </th>
            <th>
                <Thumbnail src={this.props.product1.img_url} alt={this.props.product1.name} bsStyle="primary">
                    <h3>{this.props.product1.name}</h3>

                    <h3>{this.props.product1.price}</h3>
                </Thumbnail>
            </th>
            <th>
                <Thumbnail src={this.props.product2.img_url} alt={this.props.product1.name} default>
                    <h3>{this.props.product2.name}</h3>

                    <h3>{this.props.product2.price}</h3>
                </Thumbnail>
            </th>
        </tr>
        );
    }
});


module.exports = ProductMainRow;