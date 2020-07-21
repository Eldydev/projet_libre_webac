import React from 'react';
import Home from './Home';
import Parc from './Parc';
import Attrac from './Attrac';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import './App.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/parc" component={Parc} />
          <Route path="/attrac" component={Attrac} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
