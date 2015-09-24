import React from 'react';
import ProductsTable from './ProductsTable';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ProductComparerBar from './ProductComparerBar';

let ProductsComparer = React.createClass({
    getInitialState: function () {
        return {tableData: {}}
    },
    onDataRecieved: function (data) {
        this.setState({tableData: data});
    },
    render: function () {
        return (<Grid justified>
            <Row>
                <ProductComparerBar callbackParent={this.onDataRecieved}/>
                <ProductsTable ref="productTable" products={this.state.tableData}/>
            </Row>
        </Grid>);
    }
});
module.exports = ProductsComparer;