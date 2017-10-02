import * as React from 'react';
import Product from './Product';

interface Props {
    products: Array<Object>;
}

class ProductList extends React.Component<Props, Object> {

    render() {
        return(
            <div className="product-list">
                {this.props.products.map((product) => <Product key={product.id} /> )}
            </div>
        );
    }
}

export default ProductList;