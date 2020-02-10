import axios from 'axios'

export const apiCall = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});