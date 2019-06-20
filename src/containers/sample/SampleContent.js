import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import loadable from '@loadable/component';

const Home = loadable(() => import('./home/HomeContainer'));
const Gsap = loadable(() => import('./gsap/GsapContainer'));
const DnD = loadable(() => import('./dnd/DnDContainer'));

const SampleContent = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/sample" component={Home} />
        <Route exact path="/sample/gsap" component={Gsap} />
        <Route exact path="/sample/dnd" component={DnD} />
      </Switch>
    </Container>
  )
}

export default SampleContent;
