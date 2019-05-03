import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar;
