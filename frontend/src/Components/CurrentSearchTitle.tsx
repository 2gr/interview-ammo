// Bad name :\

import * as React from 'react';

interface Props {
    currentSearch: string;
}

class CurrentSearchTitle extends React.Component<Props, Object> {

    render() {
        return(
            <div className="current-search-title">
                Searching for: {this.props.currentSearch}
            </div>
        );
    }
}

export default CurrentSearchTitle;