import React, { useState } from 'react'
import { connect } from 'react-redux';

import { addMember } from './actions';

const Team = function(props) {
    console.log(props.members);
    let [ members, setMembers ] = useState([]);
    
    function removeMember(id){
        console.log('remove member');
        setMembers();
    }
    function createCard(index){
        return <li key={props.members.length + index} className="card empty">Add Pokemon { props.members.length + index + 1}</li>;
    }
    

    function createEmptyEntry (){
        console.log('work');
        let cards = [];
        
        for(let i= 0; i < ( props.maxEntry - props.members.length); i++){
            cards.push(createCard(i));
        }
        
        return cards;
    }

    return (
        <div>
            Team
            <ul>
            { props.members.length !== 0 && props.members.map((item,i) => <li key={i} className="card filled"> {item} <button onClick={removeMember}>remove</button></li>) }    
            { createEmptyEntry() }   
            </ul>
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
        removeToTeam : () => dispatch(addMember())
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Team);


