import {createStore, combineReducers} from 'redux'

import {users} from "./reducers";

const reducers = combineReducers(
    {
        users
    },{});

export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
