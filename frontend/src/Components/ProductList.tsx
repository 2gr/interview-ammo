import * as React from 'react';
import Product from './Product';
import IProduct from '../Interfaces/Product';

interface Props {
    products: Array<IProduct>;
}

class ProductList extends React.Component<Props, Object> {

    render() {
        if (this.props.products.length === 0) {
            return(
                <div className="product-container">
                    <p>Não existem produtos para a busca realizada</p>
                </div>
            );
        }

        return(
            <div className="product-container">
                {this.props.products.map((product: IProduct) => <Product key={product.id} product={product} /> )}
            </div>
        );
    }
}

export default ProductList;