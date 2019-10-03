// import React from 'react';
// import configureStore from  '.store/store';
// import {Provider} from 'react-redux';
// import { createStore } from 'redux';
// const store = require("./store.js");
import LeftPane from './left-pane.jsx';
import RightPane from './right-pane.jsx';


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
                "Words here"
                <LeftPane state={this.state}/>
                <RightPane/>
            </div>
        )
    }
}




export default Root;