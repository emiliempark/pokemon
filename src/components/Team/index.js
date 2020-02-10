import React, { useState } from 'react'

export default function Team() {

    let [ maxEntry, setMaxEntry ] = useState(6);
    let [ members, setMembers ] = useState([]);
    
    function removeMember(id){
        console.log('remove member');
        setMembers();
    }
    function createCard(index){
        return <li key={index}>Pokemon {index + 1} <button onClick={removeMember}>remove</button></li>;
    }

    function createEntry (){
        console.log('work');
        let cards = [];
        
        for(let i= 0; i < maxEntry ; i++){
            cards.push(createCard(i));
        }
        
        return cards;
    }

    return (
        <div>
            Team
            <ul>
            { createEntry() }   
            </ul>
        </div>
    )
}
