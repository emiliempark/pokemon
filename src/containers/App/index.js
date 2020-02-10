import React from 'react';
import axios from 'axios';
import logo from '../../logo.svg';

import './App.css';

import Team from '../../components/Team';
import Search from '../../components/Search';

function App() {
  // get pokemons
  axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
  .then((res) => {
      console.log('hey', res);
  });


  return (
    <div className="App">
      <header className="App-header">
        <Team />
        <Search />
      </header>
      
    </div>
  );
}

export default App;
