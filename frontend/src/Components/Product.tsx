import * as React from 'react';

interface Props {
    id: number;
    line: string;
    size: string;
    price: number;
    promo: number;
    images: Array<String>;
}

class Product extends React.Component<Props, Object> {

    render() {
        return(
            <div className="product">
                I'm a product!
            </div>
        );
    }
}

export default Product;