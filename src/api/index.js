import axios from 'axios'

export const apiCall = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export async function getPokemon(ID_OR_NAME) {
    try{
        let res = await apiCall.get(`${ID_OR_NAME}`);
        return res.data;
    }
    catch(err) {
        if(err.response){
            // request was made, server responded with a status code
            console.log('data', err.response.data);
            console.log('status', err.response.status);
            console.log('headers', err.response.headers);
        }else{
            console.log();
        }
        console.log(err.config);
        // when 404 print 'not found' message
    }

}