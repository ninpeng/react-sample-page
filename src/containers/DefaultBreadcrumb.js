import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { Breadcrumb } from 'react-bootstrap';

const DefaultBreadcrumb = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item tag="span"><Link to="/phaser">Phaser</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/dnd">{`Drag&Drop`}</Link></Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default withRouter(DefaultBreadcrumb);
