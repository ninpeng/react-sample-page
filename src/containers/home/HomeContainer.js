import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class HomeContainer extends Component {
  render () {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-5">Hello, world!</h1>
        </Jumbotron>
      </Container>
    )
  }
}

export default HomeContainer;
