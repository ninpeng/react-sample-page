import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav variant="pills" defaultActiveKey="home" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="home" as={Link} to="/sample">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="gsap" as={Link} to="/sample/gsap">GSAP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="dnd" as={Link} to="/sample/dnd">Drag&Drop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="rematch" as={Link} to="/sample/rematch">Redux-Rematch</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="select" as={Link} toref="/sample/select">react-select</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    /*
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand as={Link} to="sample">Sample</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav variant="pills" defaultActiveKey="#" className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="sample/dnd">Drag&Drop</Nav.Link>
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
