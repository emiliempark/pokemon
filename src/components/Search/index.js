import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getPokemon } from '../../api';
import { addMember, updateMember } from '../Team/actions';

const Search = function(props) {
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

    function addToTeam(POKEMON){
        console.log('add to team', JSON.stringify(POKEMON));
        
        // localStorage
        let newMembers = props.members;

        newMembers.push(POKEMON);

        localStorage.setItem('members', JSON.stringify(newMembers) );


        console.log('oi', newMembers, localStorage.getItem('members'));
        // Redux
        props.updateMember(newMembers);
        
    }

    return (
        <div>
            <p>Search Pokemon</p>
            <form>
                <input type="text" placeholder="ID or Name" onChange={(e) => { handleKeyword(e) }}/>
                <input type="submit" onClick={(e)=> {searchPokemon(e)}} />
            </form>

            <p>Result</p>
            {result !== undefined &&( 
                <p>
                    {result.name} {result.id} 
                    {(props.members.length < props.maxEntry ) &&
                        (<button onClick={() => addToTeam(result)}>  Add to Team</button>)
                    }
                </p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        members: state.team.list,
        maxEntry: state.team.maxEntry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMember : (value) => dispatch(updateMember(value))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Search);