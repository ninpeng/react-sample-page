import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbars from './Navbars';
import DrawerComponent from './DrawerComponent';

const Home = loadable(() => import('./home/HomeContainer'));
const Sample = loadable(() => import('./sample/SampleContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));
const Bitly = loadable(() => import('./bitly/BitlyContainer'));
const Roadmap = loadable(() => import('./roadmap/RoadmapContainer'));
const NoMatch = loadable(() => import('./nomatch/NomatchContainer'));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 2),
    // [theme.breakpoints.up('lg')]: {
    //   maxWidth: 'calc(100% - 240px)',
    // },
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const DefaultLayout = ({ location }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbars setOpen={setOpen} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sample" component={Sample} />
          <Route exact path="/phaser" component={Phaser} />
          <Route exact path="/bitly" component={Bitly} />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
  )
}

export default DefaultLayout;
