import * as React from 'react';
import ProductsPerPageSelector from './ProductsPerPageSelector';

interface Props {
    productsPerPage: number;
    page: number;
    maxPages: number;
    changePageAction: any;
    changeProductsPerPageAction: any;
}

class Pagination extends React.Component<Props, Object> {

    _onClick = (event: any) => {
        event.preventDefault();

        let target = event.target.dataset.pageindex;
        
        if (target > this.props.maxPages || target < 1) {
            return;
        }

        this.props.changePageAction(target);
    }

    getPagesToShow = () => {

        let pagesToShow = 5;
        let page: number = this.props.page;
        let lastPage: number = this.props.maxPages;

        if (lastPage < pagesToShow) {
            return Array.from(new Array(lastPage), (x, i) => i + 1);
        } else if (page < (Math.round(pagesToShow / 2))) {
            return Array.from(new Array(pagesToShow), (x, i) => i + 1);
        } else if (page > (lastPage - Math.round(pagesToShow / 2))) {
            return Array.from(new Array(lastPage), (x, i) => i + 1).slice(-pagesToShow);
        }

        return [page - 2, page - 1, page, page + 1, page + 2];
    }

    // FIXME: Kill this implementation w/ fire, so it may never live again
    render() {
        return(
            <div className="pagination">
                <ProductsPerPageSelector productsPerPage={this.props.productsPerPage} changeProductsPerPageAction={this.props.changeProductsPerPageAction} />
                <div className="pages">
                    <a href={'#'} className={this.props.page == 1 ? "page disabled" : "page"} data-pageindex={1} key="first" onClick={this._onClick}>First</a>
                    <a href={'#'} className={this.props.page == 1 ? "page disabled" : "page"} data-pageindex={this.props.page - 1} key="prev" onClick={this._onClick}>Prev</a>
                    {
                        (this.getPagesToShow()).map((value, index) => {
                            let page = value;
                            let currentClass = 'page';

                            if (page === this.props.page) {
                                currentClass = currentClass + ' page-current';
                            }
                            return <a href={'#'} className={currentClass} data-pageindex={page} key={page} onClick={this._onClick}>{page}</a>;
                        })
                    }
                    <a href={'#'} className={this.props.page == this.props.maxPages ? "page disabled" : "page"} data-pageindex={this.props.page + 1} key="next" onClick={this._onClick}>Next</a>
                    <a href={'#'} className={this.props.page == this.props.maxPages ? "page disabled" : "page"} data-pageindex={this.props.maxPages} key="last" onClick={this._onClick}>Last</a>
                </div>
            </div>
        );
    }
}

export default Pagination;