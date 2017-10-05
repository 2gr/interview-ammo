import * as React from 'react';

interface Props {
    page: number;
    totalProducts: number;
    productsPerPage: number;
    changePageAction: any;
}

class PageSelector extends React.Component<Props, Object> {
    
    _onClick = (event: any) => {
        event.preventDefault();

        let target = event.target.dataset.pageindex;
        
        if (target > this.getMaxPages() || target < 1) {
            return;
        }

        this.props.changePageAction(target);
    }

    getMaxPages () {
        if (this.props.totalProducts < this.props.productsPerPage) {
          return 1;
        }
        
        return Math.ceil(this.props.totalProducts / this.props.productsPerPage);
      }

    getPagesToShow () {

        let pagesToShow = 5;
        let page: number = this.props.page;
        let lastPage: number = this.getMaxPages();

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
        return (
            <div className="pages">
                <a href={'#'} className={this.props.page == 1 ? "page disabled" : "page"} data-pageindex={1} key="first" onClick={this._onClick}>{'|<'}</a>
                <a href={'#'} className={this.props.page == 1 ? "page disabled" : "page"} data-pageindex={this.props.page - 1} key="prev" onClick={this._onClick}>{'<'}</a>
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
                <a href={'#'} className={this.props.page == this.getMaxPages() ? "page disabled" : "page"} data-pageindex={this.props.page + 1} key="next" onClick={this._onClick}>{'>'}</a>
                <a href={'#'} className={this.props.page == this.getMaxPages() ? "page disabled" : "page"} data-pageindex={this.getMaxPages()} key="last" onClick={this._onClick}>{'>|'}</a>
            </div>
        );
    }
}

export default PageSelector;