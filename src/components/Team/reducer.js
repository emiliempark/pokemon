import { ADD_MEMBER } from './actions';
 
export const initialState = {
    maxEntry: 6,
    list: ['hello']
};


const teamReducer = (state = initialState, action) => {
    switch(action) {
        case ADD_MEMBER:
            console.log('reducer add member');
            break;

        default:
            return state;
    }
}

export default teamReducer;