import { createStore } from 'redux';
import ReactDDOM from 'react-dom';
import Root from '../react/src/root.jsx'

document.addEventListener("DOMContentLoaded", ()=>{

    const state = {
        image_ids: [],
        image_id: 1,
        available_folders: [],
        available_tags: [],
        favorites: new Set()
    };

    let rootContainer = document.querySelector('#root-container');
    ReactDOM.render(<Root state={state}/>, rootContainer);

});