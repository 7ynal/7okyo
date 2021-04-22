import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Grid} from '@material-ui/core';

import {GetAll, DiscordBot} from './api/MotherBrain/discordBots';

import Nav from './pages/nav';
import Pitch from './components/pitch';
import Home from './pages/home';
import CreateBot from './pages/create/bot';
import Create from './pages/create';

import './App.css';


function App() {
  const [discordBots, setDiscordBots] = useState<DiscordBot[]>();
  useEffect(() => {
    setDiscordBots(GetAll());
  },[])
  return (
    <Router>
      <Nav />
      <Switch>
          <Route path="/create/bot">
            <CreateBot />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Grid container direction={'row'} justify={'center'}>
        <Grid item xs={8}>
          {discordBots != null && discordBots.map((bot,key) => (
            <Pitch {...bot} key={key}/>
          ))}
        </Grid>
      </Grid>
  </Router>
  );
}

export default App;
