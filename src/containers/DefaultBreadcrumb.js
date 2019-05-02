import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const DefaultBreadcrumb = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/phaser">Phaser</Link></BreadcrumbItem>
        <BreadcrumbItem>Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default withRouter(DefaultBreadcrumb);
