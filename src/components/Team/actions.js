export const ADD_MEMBER = '@Team/ADD_MEMBER';

export function addMember(POKEMON_OBJ){
    return {
        type: ADD_MEMBER, 
        POKEMON_OBJ
    }
}