import * as React from 'react';

interface Props {
    qty: number;
}

class TotalProducts extends React.Component<Props, Object> {

    render() {
        return(
            <div className="total-products">
                {this.props.qty} produtos encontrados
            </div>
        );
    }
}

export default TotalProducts;