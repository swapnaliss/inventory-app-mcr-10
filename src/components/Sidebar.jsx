import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">
        DashBoard
      </Nav.Link>
      <Nav.Link href="/Department">
        Departments
      </Nav.Link>
      <Nav.Link href="/ProductList">
        Products    
  </Nav.Link>
    </Nav>
  </div>

  )
}

export default Sidebar