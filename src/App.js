import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </header>
    </div>
  );
}

export default App;
