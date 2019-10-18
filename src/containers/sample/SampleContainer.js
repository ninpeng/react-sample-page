import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Sidebar from './Sidebar';
import SampleContent from './SampleContent';

const SampleContainer = () => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Sidebar/>
      </Row>
      <Row>
        <SampleContent/>
      </Row>
    </Container>
  )
}

export default SampleContainer;
