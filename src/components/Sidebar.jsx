import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link disabled>
        DashBoard
      </Nav.Link>
      <Nav.Link disabled>
        Departments
      </Nav.Link>
      <Nav.Link disabled>
        Products    
  </Nav.Link>
    </Nav>
  </div>

  )
}

export default Sidebar