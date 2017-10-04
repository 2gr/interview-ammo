import * as React from 'react';
import IProduct from '../Interfaces/Product';

class Product extends React.Component<IProduct, Object> {

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
                <span className="product-price">{`${this.props.price} - ${this.props.promo}`}</span>
            </div>
        );
    }
}

export default Product;