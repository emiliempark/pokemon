import React, { useState } from 'react'
import { getPokemon } from '../../api';

export default function Search() {
    function searchPokemon(e){
        e.preventDefault();
        console.log('search...', e.target.value, keyword);
        getPokemon(keyword);
    }
    function handleKeyword(e){
        setKeyword(e.target.value);
    }
    let [keyword, setKeyword] = useState();

    return (
        <div>
            <form>
                <input type="text" placeholder="ID or Name" onChange={(e) => { handleKeyword(e) }}/>
                <input type="submit" onClick={(e)=> {searchPokemon(e)}} />
            </form>
        </div>
    )
}
