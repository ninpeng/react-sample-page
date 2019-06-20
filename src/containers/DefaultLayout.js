import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import Navbars from './Navbars';

const Home = loadable(() => import('./home/HomeContainer'));
const Sample = loadable(() => import('./sample/SampleContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Navbars/>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route path="/sample" component={Sample} />
              <Route exact path="/phaser" component={Phaser} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
