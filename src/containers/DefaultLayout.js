import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Navbars from './Navbars';
import DrawerComponent from './DrawerComponent';

const PREFIX = 'DefaultLayout';

const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  appBarSpacer: `${PREFIX}-appBarSpacer`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },

  [`& .${classes.content}`]: {
    position: 'relative',
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 2),
    // [theme.breakpoints.up('lg')]: {
    //   maxWidth: 'calc(100% - 240px)',
    // },
  },

  [`& .${classes.appBarSpacer}`]: theme.mixins.toolbar,
}));

const Home = loadable(() => import('./home/HomeContainer'));
const Sample = loadable(() => import('./sample/SampleContainer'));
const Phaser = loadable(() => import('./phaser/PhaserContainer'));
const Bitly = loadable(() => import('./bitly/BitlyContainer'));
const Roadmap = loadable(() => import('./roadmap/RoadmapContainer'));
const NoMatch = loadable(() => import('./nomatch/NomatchContainer'));

const DefaultLayout = ({ location }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Root className={classes.root}>
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
    </Root>
  );
};

export default DefaultLayout;
