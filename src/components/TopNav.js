
import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const TopNav = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <img className="logo" src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='Logo' />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/users"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Users
          </Nav.Link>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default TopNav;
