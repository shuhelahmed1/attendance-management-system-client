import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="md" collapseOnSelect style={{backgroundColor: "black"}} variant="dark">
    <Container>
    <Navbar.Brand style={{fontWeight: "bold"}} href="/home">Attendance Management System</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/"><span className='yellow-text'>Home</span></Nav.Link>
      <Nav.Link as={Link} to="/registerstudent"><span className='yellow-text'>Register as a Student</span></Nav.Link>
      <Nav.Link as={Link} to="/registerteacher"><span className='yellow-text'>Register as a Teacher</span></Nav.Link>

      {/* {
        user.email && <NavDropdown title="Dashboard" id="nav-dropdown">
        <Nav.Link as={Link} to='/payment'>Pay</Nav.Link>
        <Nav.Link as={Link} to='/myorders'>My Orders</Nav.Link>
        <Nav.Link as={Link} to='/review'>Review</Nav.Link>
        <Nav.Link as={Link} onClick={logOut}>Logout</Nav.Link>
      </NavDropdown>
      } */}

      {/* {
        admin && <NavDropdown title="Admin Panel" id="nav-dropdown">
        <Nav.Link as={Link} to='/makeadmin'>Make Admin</Nav.Link>
        <Nav.Link as={Link} to='/addproduct'>Add Product</Nav.Link>
        <Nav.Link as={Link} to='/manageorders'>Manage Orders</Nav.Link>
        <Nav.Link as={Link} to='/manageproducts'>Manage Products</Nav.Link>
        <Nav.Link as={Link} to='/managereviews'>Manage Reviews</Nav.Link>
        <Nav.Link as={Link} onClick={logOut}>Logout</Nav.Link>
      </NavDropdown>
      } */}

      {/* {
        user.email &&
        <NavDropdown id="nav-dropdown" title={
        <img  style={{width:'32px', height:'32px',display: 'inline-block', borderRadius:'50%',marginTop: '5px'}} src={userProfilePhoto} alt="User Pic" />
        }>
        <Nav.Link as={Link} onClick={logOut}>Logout</Nav.Link>
        </NavDropdown>
      } */}
      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;