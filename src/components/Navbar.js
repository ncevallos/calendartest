import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(-1);

  const location = useLocation();


  //the home page contact form picture col needs to be set col-lg-6 so that it wraps correctly
  useEffect(() => {
    if (location.pathname.startsWith('/Calendar')) {
      setActiveKey(1);
    } else if (location.pathname === '/') {
      setActiveKey(0);
    } else {
      setActiveKey(-1);
    }
  }, [location]);

  return (
    <Navbar expand='lg' sticky='top'>
      <div className='container'>
        <Navbar.Brand as={Link} to='/' onClick={() => setActiveKey(0)}>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='nav-bar-component' />
        <Navbar.Collapse id='nav-bar-component'>
          <Nav
            className='mr-auto ml-auto'
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
          >
            <Nav.Link as={Link} to='/' eventKey={0}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/Calendar' eventKey={1}>
              Calendar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
