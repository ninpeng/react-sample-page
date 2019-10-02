import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import loadable from '@loadable/component';

const Home = loadable(() => import('./home/HomeContainer'));
const Gsap = loadable(() => import('./gsap/GsapContainer'));
const DnD = loadable(() => import('./dnd/DnDContainer'));
const Rematch = loadable(() => import('./redux/RematchContainer'));
const Select = loadable(() => import('./select/SelectContainer'));
const Graphql = loadable(() => import('./graphql/GraphqlContainer'));
const Share = loadable(() => import('./share/ShareContainer'));

const SampleContent = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/sample" component={Home} />
        <Route exact path="/sample/gsap" component={Gsap} />
        <Route exact path="/sample/dnd" component={DnD} />
        <Route exact path="/sample/rematch" component={Rematch} />
        <Route exact path="/sample/select" component={Select} />
        <Route exact path="/sample/graphql" component={Graphql} />
        <Route exact path="/sample/share" component={Share} />
      </Switch>
    </Container>
  )
}

export default SampleContent;
