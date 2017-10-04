import * as React from 'react';

interface Props {
    productsPerPage: number;
    page: number;
    maxPages: number;
}

class Pagination extends React.Component<Props, Object> {

    render() {
        return(
            <div className="pagination">
                <div className="products-per-page">
                    <select>
                        <option value={this.props.productsPerPage}>{this.props.productsPerPage} produtos por página </option>
                    </select>
                </div>
                <div className="pages">
                    {
                        (Array.from(new Array(this.props.maxPages), (x, i) => i)).map((value, index) => {
                            let page = index + 1;
                            let currentClass = 'page';

                            if (page === this.props.page) {
                                currentClass = currentClass + ' page-current';
                            }
                            return <div className={currentClass} key={page}>{page}</div>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pagination;