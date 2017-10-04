import * as React from 'react';

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
        this.props.changePageAction(event.target.dataset.pageindex);
    }

    // FIXME: I'm a component, extract me please

    _onChange = (event: any) => {
        this.props.changeProductsPerPageAction(parseInt(event.target.value));
    }

    productsPerPageBuilder = () => {

        const options: Array<number> = [1, 10, 20, 30];
        const productsPerPage: number = this.props.productsPerPage;

        if (options.indexOf(productsPerPage) === -1) {
            options.push(productsPerPage);
            options.sort();
        }

        return (
            <select onChange={this._onChange}>
                {options.map((option) => {
                    return <option value={option}>{option} produtos por página </option>
                })}

            </select>
        );
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

    render() {
        return(
            <div className="pagination">
                <div className="products-per-page">
                    {this.productsPerPageBuilder()}
                </div>
                <div className="pages">
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
                </div>
            </div>
        );
    }
}

export default Pagination;