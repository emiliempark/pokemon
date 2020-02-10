import { UPDATE_MEMBER } from './actions';
import _ from 'lodash';



export const initialState = {
    maxEntry: 6,
    list: []
};


const teamReducer = (state = initialState, action) => {
    switch(action.type) {
      
        case UPDATE_MEMBER:
            return { 
                ...state, 
                list: action.payload
            }
            break;
        default:
            return state;
    }
}

export default teamReducer;