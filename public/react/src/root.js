// import React from 'react';
// import configureStore from  '.store/store';
// import {Provider} from 'react-redux';


class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        // this.store = configureStore();

    }

    render() {
        // debugger
        return (
            <div className="pane" id="root">
                <LeftPane state={this.state}/>
                <RightPane/>
            </div>
        )
    }
}

const state = {
    image_ids: [],
    image_id: 1,
    available_folders: [],
    available_tags: [],
    favorites: new Set()
};

let rootContainer = document.querySelector('#root-container');
ReactDOM.render(<Root state={state}/>, rootContainer);
