import * as React from 'react';

interface Props {
    price: string;
    promo?: string|undefined;
}

class Price extends React.Component<Props, Object> {
    
    render() {

        let price = this.props.price;
        let promo = this.props.promo;

        if (promo) {
            return(
                <div className="product-price">
                    <span className="product-price-old">{price}</span> por <span className="product-price-current">{promo}</span>
                </div>
            );
        }
        
        return (
            <div className="product-price">
                <span className="product-price-current">{price}</span>
            </div>
        );
    }
}

export default Price;