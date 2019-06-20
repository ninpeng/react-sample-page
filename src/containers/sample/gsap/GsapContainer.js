import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

import AirDrop from './AirDrop';

const GsapContainer = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-5">GSAP 예제</h1>
      </Jumbotron>
      <AirDrop />
    </Container>
  )
}

export default GsapContainer;
