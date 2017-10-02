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

    _onSubmit = (event: any) => {
        this.props.submitAction(this.state.currentSearch);

    }

    // FIX: Change input submit for an onKeyPress
    // https://stackoverflow.com/questions/27827234/keypress-event-handling-in-reactjs
    render() {
        return(
            <div className="search-input-container">
                <input type="text" value={this.state.currentSearch} onChange={this._onChange}/>
                <input type="submit" value="Submit" onClick={this._onSubmit} />
            </div>
        );
    }
}

export default SearchInput;