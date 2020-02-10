import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateMember } from '../../components/Team/actions'

import './App.css';

import Team from '../../components/Team';
import Search from '../../components/Search';

const App = function(props) {

  useEffect(() => {
    if(localStorage.members){
      props.updateMember(JSON.parse(localStorage.members)); 
    }
     
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <Team members={props.members}/>
        <Search />
      </header>
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      members: state.team.list,
      maxEntry: state.team.maxEntry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateMember : (array) => dispatch(updateMember(array))
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
