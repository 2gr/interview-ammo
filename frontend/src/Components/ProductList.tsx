import * as React from 'react';
import Product from './Product';
import IProduct from '../Interfaces/Product';

interface Props {
    products: Array<IProduct>;
}

class ProductList extends React.Component<Props, Object> {

    render() {
        return(
            <div className="product-container">
                {this.props.products.map((product) => <Product key={product.id} id={product.id} name={product.name} line={product.line} size={product.size} price={product.price} promo={product.promo} images={product.images} /> )}
            </div>
        );
    }
}

export default ProductList;