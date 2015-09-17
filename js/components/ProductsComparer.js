import React from 'react';
import ProductsTable from './ProductsTable';
import ProductComparerBar from './ProductComparerBar';
class ProductsComparer extends React.Component {
    render() {
        return (<div> <ProductComparerBar /> <ProductsTable /> </div>);
    }
}

export default ProductsComparer;