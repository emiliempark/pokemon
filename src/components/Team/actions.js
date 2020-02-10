export const ADD_MEMBER = '@Team/ADD_MEMBER';
export const UPDATE_MEMBER = '@Team/UPDATE_MEMBER';

export function addMember(POKEMON_OBJ){
    return {
        type: ADD_MEMBER, 
        payload: POKEMON_OBJ
    }
}

export function updateMember(members){
    return {
        type: UPDATE_MEMBER,
        payload: members
    }
}