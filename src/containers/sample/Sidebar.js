import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav variant="pills" defaultActiveKey="home" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#sample">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gsap" href="#sample/gsap">GSAP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="dnd" href="#sample/dnd">Drag&Drop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="rematch" href="#sample/rematch">Redux-Rematch</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="select" href="#sample/select">react-select</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    /*
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#sample">Sample</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav variant="pills" defaultActiveKey="#" className="flex-column">
        <Nav.Item>
          <Nav.Link href="#sample/dnd">Drag&Drop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    */
  )
}

export default Sidebar;
