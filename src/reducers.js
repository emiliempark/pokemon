import { combineReducers } from 'redux';

import globalReducer from './containers/App/reducer';
import teamReducer from './components/Team/reducer'
const initialState = {
    
}

export default function createReducer( state = initialState, action){
    const rootReducer = combineReducers({
        global: globalReducer,
        team: teamReducer
    });  

    return rootReducer;  
}

