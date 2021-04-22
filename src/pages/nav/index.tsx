import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav(){
    return <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/create">Create</Link>
        </li>
        <li>
            <Link to="/create/bot">Create Bot</Link>
        </li>
        </ul>
  </nav>
}