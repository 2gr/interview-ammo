import * as React from 'react';
import IProduct from '../Interfaces/Product';

class Product extends React.Component<IProduct, Object> {

    displayPrice = () => {
        if (this.props.promo) {
            return(
                <div className="product-price">
                    <span className="product-price-old">{this.props.price}</span> por <span className="product-price-current">{this.props.promo}</span>
                </div>
            );
        }
        return (
            <div className="product-price">
                <span className="product-price-current">{this.props.price}</span>
            </div>
        );
        }

    render() {
        return(
            <div className="product">
                    <div className="product-image-container">
                    {this.props.images.map((link: any, index: any) => <img className="product-image" key={index} src={link} />)}
                </div>
                <div className="product-category">
                    <span className="product-name">{this.props.name}</span>
                    <span className="product-details">{`${this.props.line} - ${this.props.size}`}</span>
                </div>
                {this.displayPrice()}
            </div>
        );
    }
}

export default Product;