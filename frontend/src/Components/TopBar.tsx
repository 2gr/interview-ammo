import * as React from 'react';
import SearchInput from './SearchInput';

const logo = require('../logo.png');

interface Props {
    currentSearch: string;
    submitAction: any; //gambeta
}

class TopBar extends React.Component<Props, Object> {

    render() {

        const currentSearch: string = this.props.currentSearch;

        return(
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} />
                </div>
                <SearchInput currentSearch={currentSearch} submitAction={this.props.submitAction}/>
            </div>
        );
    }
}

export default TopBar;