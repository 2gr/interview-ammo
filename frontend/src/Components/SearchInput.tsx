import * as React from 'react';

interface Props {
    currentSearch: string;
    submitAction: any;
}

interface State {
    currentSearch: string;
}

class SearchInput extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentSearch: this.props.currentSearch
        };
    }

    _onChange = (event: any) => {
        this.setState({
            currentSearch: event.target.value
        });
    }

    _onKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            this.props.submitAction(this.state.currentSearch);
        }
    }
    
    render() {
        return(
            <div className="search-input-container">
                <input type="text" value={this.state.currentSearch} onChange={this._onChange} onKeyDown={this._onKeyDown}/>
            </div>
        );
    }
}

export default SearchInput;