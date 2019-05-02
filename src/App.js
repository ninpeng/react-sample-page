import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import './App.css';

import DefaultLayout from './containers/DefaultLayout';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    </HashRouter>
  );
}

export default App;
