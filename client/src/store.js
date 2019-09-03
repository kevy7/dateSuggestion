/*
This is needed for setting up our app with redux
*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//need to ccreate reducers as well and import it
import reducers from './reducers';

const initialState = {}; //Creating our initial state
const middleware = [thunk]; //Setting up middleware to make api calls

export const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)

    //This may be needed to view redux state in Chrome
    /*
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    */
);