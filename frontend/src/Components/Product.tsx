import * as React from 'react';
import IProduct from '../Interfaces/Product';

interface Props {
    product: IProduct;
}

class Product extends React.Component<Props, Object> {

    product = this.props.product;

    displayPrice = () => {
        if (this.product.promo) {
            return(
                <div className="product-price">
                    <span className="product-price-old">{this.product.price}</span> por <span className="product-price-current">{this.product.promo}</span>
                </div>
            );
        }
        return (
            <div className="product-price">
                <span className="product-price-current">{this.product.price}</span>
            </div>
        );
        }

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
                {this.displayPrice()}
            </div>
        );
    }
}

export default Product;