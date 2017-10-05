import * as React from 'react';
import Price from './Price';
import IProduct from '../Interfaces/Product';

interface Props {
    product: IProduct;
}

class Product extends React.Component<Props, Object> {

    product = this.props.product;

    render() {
        return(
            <div className="product">
                    <div className="product-image-container">
                    {this.product.images.map((link: any, index: any) => <img className="product-image" key={index} src={link} />)}
                </div>
                <div className="product-category">
                    <span className="product-name">{this.product.name}</span>
                    <span className="product-details">{`${this.product.line} - ${this.product.size}`}</span>
                </div>
                <Price price={this.product.price} promo={this.product.promo} />
            </div>
        );
    }
}

export default Product;