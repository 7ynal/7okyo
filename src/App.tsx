import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/bits/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Button />
      </header>
    </div>
  );
}

export default App;
