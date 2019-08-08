import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class NomatchContainer extends Component {
  render () {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-5">No Match URL!</h1>
        </Jumbotron>
      </Container>
    )
  }
}

export default NomatchContainer;
