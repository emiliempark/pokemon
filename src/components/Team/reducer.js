import { ADD_MEMBER, UPDATE_MEMBER } from './actions';
import _ from 'lodash';



export const initialState = {
    maxEntry: 6,
    list: []
};


const teamReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MEMBER:
            console.log('reducer add member');
            break;
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