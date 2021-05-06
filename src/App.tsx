import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Grid} from '@material-ui/core';

import Nav from './pages/nav';
import Home from './pages/home';
import CreateBot from './pages/create/bot';
import Create from './pages/create';

import style from './style.module.scss';


function App() {
  return (
    <Router>
      <Grid container className={style.background}>
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
      </Grid>
      <Nav />
  </Router>
  );
}

export default App;
