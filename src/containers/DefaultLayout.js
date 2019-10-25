import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Navbars from './Navbars';

const Home = loadable(() => import('./home/HomeContainer'));
const Sample = loadable(() => import('./sample/SampleContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));
const NoMatch = loadable(() => import('./nomatch/NomatchContainer'));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DefaultLayout = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbars />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/sample" component={Sample} />
            <Route exact path="/phaser" component={Phaser} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </main>
    </div>
  )
}

export default DefaultLayout;
