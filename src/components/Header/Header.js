import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user,logOut,teacher} = useFirebase();
    return (
        <div>
            <Navbar expand="md" collapseOnSelect style={{backgroundColor: "rgba(32, 156, 238,0.5)", color: 'black', fontWeight: 'bold'}} >
    <Container>
    <Navbar.Brand style={{fontWeight: "bold"}} href="/">Attendance Management System</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/registerstudent">Register as a Student</Nav.Link>
      <Nav.Link as={Link} to="/registerteacher">Register as a Teacher</Nav.Link>
      {
        teacher && <Nav.Link as={Link} to="/studentslist"><span>Students List</span></Nav.Link>
      }

      {
        user.email &&
        <button className='common-button' onClick={logOut}>Logout</button>
      }
      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;