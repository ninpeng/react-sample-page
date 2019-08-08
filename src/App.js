import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';

import DefaultLayout from './containers/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
