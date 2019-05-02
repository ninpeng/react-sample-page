import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import loadable from '@loadable/component';

// import DefaultAside from './DefaultAside';
// import DefaultFooter from './DefaultFooter';
// import DefaultHeader from './DefaultHeader';
import DefaultBreadcrumb from './DefaultBreadcrumb';

const Home = loadable(() => import('./home/HomeContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        {/*<AppHeader fixed>
          <DefaultHeader />
        </AppHeader>*/}
        <div className="app-body">
          {/*<AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>*/}
          <main className="main">
            <DefaultBreadcrumb/>
            <Container fluid>
              <Switch>
                <Route exact path="/" name="home" component={Home} />
                <Route exact path="/phaser" name="phaser" component={Phaser} />
              </Switch>
            </Container>
          </main>
        </div>
        {/*<AppFooter>
          <DefaultFooter />
        </AppFooter>*/}
      </div>
    );
  }
}

export default DefaultLayout;
