import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import loadable from '@loadable/component';

const Phaser = loadable(() => import('../phaser/PhaserContainer'));
const DnD = loadable(() => import('../dnd/DnDContainer'));

const SampleContent = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/sample/phaser" name="phaser" component={Phaser} />
        <Route exact path="/sample/dnd" name="dnd" component={DnD} />
      </Switch>
    </Container>
  )
}

export default SampleContent;
