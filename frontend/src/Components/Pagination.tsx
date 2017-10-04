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
        this.props.changePageAction(event.target.text);
    }

    // FIXME: I'm a component, extract me please

    _onChange = (event: any) => {
        this.props.changeProductsPerPageAction(event.target.value);
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

    render() {
        return(
            <div className="pagination">
                <div className="products-per-page">
                    {this.productsPerPageBuilder()}
                </div>
                <div className="pages">
                    {
                        (Array.from(new Array(this.props.maxPages), (x, i) => i)).map((value, index) => {
                            let page = index + 1;
                            let currentClass = 'page';

                            if (page === this.props.page) {
                                currentClass = currentClass + ' page-current';
                            }
                            return <a href={'#'}className={currentClass} key={page} onClick={this._onClick}>{page}</a>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pagination;