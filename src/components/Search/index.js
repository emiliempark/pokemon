import React, { useState } from 'react'
import { getPokemon } from '../../api';

export default function Search() {
    let [keyword, setKeyword] = useState('');
    let [result, setResult] = useState();
    async function searchPokemon(e){
        e.preventDefault();
        console.log('search...', keyword);
        if(keyword.length !== 0){
            let result = await getPokemon(keyword);
            console.log('test', result);
            if(result !== undefined){
                setResult(result);
            }
        }    
    }
    

    function handleKeyword(e){
        setKeyword(e.target.value);
    }

    function addToTeam(){
        console.log('add to team');
    }

    return (
        <div>
            <p>Search Pokemon</p>
            <form>
                <input type="text" placeholder="ID or Name" onChange={(e) => { handleKeyword(e) }}/>
                <input type="submit" onClick={(e)=> {searchPokemon(e)}} />
            </form>

            <p>Result</p>
            {result !== undefined && (
                <p>{result.name} {result.id} <button onClick={addToTeam}> Add to Team</button></p>
            )}
        </div>
    )
}
