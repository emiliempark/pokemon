import React from 'react';
import logo from '../../logo.svg';

import './App.css';

import Team from '../../components/Team';
import Search from '../../components/Search';

function App() {

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
