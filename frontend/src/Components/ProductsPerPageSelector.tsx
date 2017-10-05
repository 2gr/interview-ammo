import * as React from 'react';

interface Props {
    productsPerPage: number;
    changeProductsPerPageAction: any;
}

class ProductsPerPageSelector extends React.Component<Props, Object> {
    
    options: Array<number> = [1, 10, 20, 30];

    constructor(props: Props) {
        super(props);

        let productsPerPage: number = this.props.productsPerPage;
        
        if (this.options.indexOf(productsPerPage) === -1) {
            this.options.push(productsPerPage);
            this.options.sort();
        }
    }

    _onChange = (event: any) => {
        this.props.changeProductsPerPageAction(parseInt(event.target.value, 10));
    }
    
    render() {
        return (
            <div className="products-per-page">
                <select onChange={this._onChange}>
                    {this.options.map((option) => {
                        return <option key={option} value={option}>{option} produtos por página </option>;
                    })}
                </select>
            </div>
        );
    }
}

export default ProductsPerPageSelector;