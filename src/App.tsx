import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import './App.css';

import {GetAll, DiscordBot} from './api/MotherBrain/discordBots';

import Pitch from './components/pitch';

function App() {
  const [discordBots, setDiscordBots] = useState<DiscordBot[]>();
  useEffect(() => {
    setDiscordBots(GetAll());
  },[])
  return (
    <Grid container direction={'row'} justify={'center'}>
      <Grid item xs={8}>
        {discordBots != null && discordBots.map((bot,key) => (
          <Pitch {...bot} key={key}/>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
