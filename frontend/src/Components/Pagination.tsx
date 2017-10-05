import * as React from 'react';
import ProductsPerPageSelector from './ProductsPerPageSelector';
import PageSelector from './PageSelector';

interface Props {
    productsPerPage: number;
    page: number;
    totalProducts: number;
    changePageAction: any;
    changeProductsPerPageAction: any;
}

class Pagination extends React.Component<Props, Object> {
    render() {
        return(
            <div className="pagination">
                <ProductsPerPageSelector productsPerPage={this.props.productsPerPage} changeProductsPerPageAction={this.props.changeProductsPerPageAction} />
                <PageSelector page={this.props.page} productsPerPage={this.props.productsPerPage} totalProducts={this.props.totalProducts} changePageAction={this.props.changePageAction}/>
            </div>
        );
    }
}

export default Pagination;