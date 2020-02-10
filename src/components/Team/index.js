import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateMember } from './actions';

import styles from './styles';
const Div = styled.div`${styles}`;

const Team = function(props) {
    console.log('team', props.members.length);
    useEffect(() => {
        console.log('change');
         
      }, [props.members]);
    function removeMember(id){
        // console.log('remove member', id);

        // get rid of object matching id
        let result = props.members.filter((item) => {
            // console.log('filter', item.id);
            return item.id !== id
        });
        
        
        localStorage.setItem('members', JSON.stringify(result) );


        // console.log('oi', result, localStorage.getItem('members'));
        props.updateMember(result);
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
        <Div>
            Team
            <ul>
            { props.members.length !== 0 && props.members.map((item,i) => <li key={i} className="card filled"> {item.name} <button onClick={() => removeMember(item.id)}>remove</button></li>) }    
            { createEmptyEntry() }   
            </ul>
        </Div>
    )
}

const mapStateToProps = (state) => {
    return {
        maxEntry: state.team.maxEntry
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMember : (value) => dispatch(updateMember(value))
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Team);


