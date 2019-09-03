import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //This is a react component that stores your state data - centralized data for re-rendering
import { BrowserRouter as Router } from 'react-router-dom'; //our 'App' component has to be wrapped within our browerRouter

import { store } from "./store";
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

