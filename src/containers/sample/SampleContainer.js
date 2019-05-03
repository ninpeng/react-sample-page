import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from './Sidebar';
import SampleContent from './SampleContent';

const SampleContainer = () => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col className="d-flex" xs="12" md="3" xl="2">
          <Sidebar/>
        </Col>
        <Col>
          <SampleContent/>
        </Col>
      </Row>
    </Container>
  )
}

export default SampleContainer;
