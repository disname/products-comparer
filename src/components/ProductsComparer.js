var React = require('react'),
    ProductsTable = require('./ProductsTable'),
    Grid = require('react-bootstrap').Grid,
    Row = require('react-bootstrap').Row,
    ProductComparerBar = require('./ProductComparerBar'),ProductsComparer;
 ProductsComparer = React.createClass({
    getInitialState:function(){
      return {tableData:{}}
    },
    onDataRecieved: function (data) {
        this.setState({tableData : data});
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