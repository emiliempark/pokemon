import { createStore } from 'redux'
import createReducer from './reducers';

const store = createStore(
    createReducer(), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;