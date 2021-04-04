import React, {useState, useEffect} from 'react';
import './App.css';

import {GetAll, DiscordBot} from './api/MotherBrain/discordBots';

import Pitch from './components/pitch';

function App() {
  const [discordBots, setDiscordBots] = useState<DiscordBot[]>();
  useEffect(() => {
    setDiscordBots(GetAll());
  },[])
  return (
    <div className="App">
      <header className="App-header">
      {discordBots != null && discordBots.map((bot,key) => (
        <Pitch {...bot} key={key}/>
      ))}
      </header>
    </div>
  );
}

export default App;
