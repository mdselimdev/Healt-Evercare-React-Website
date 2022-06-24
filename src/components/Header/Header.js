import React, { useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
    <Container>
                    <Navbar.Brand as={Link} className="text-white fw-bolder fs-1" to="/">Health Evarcare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">                     <Nav.Link as={Link} className="text-white fw-bolder fs-4" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white fw-bolder fs-4" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="text-white fw-bolder fs-4" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="text-white fw-bolder fs-4" to="/contact">Contact</Nav.Link>
                            {
                                user.email ?
                                <>
                                        <Nav.Link className="text-warning fw-bolder fs-4">
                                            { user.displayName ? user.displayName : 'not found'}
                                        </Nav.Link>
                                        
                                        <Nav.Link onClick={handleLogOut} className="text-white fw-bolder fs-4">
                                            Log Out
                                        </Nav.Link>
                                    </> :
                                    <Nav.Link as={Link} className="text-white fw-bolder fs-4" to="/login">LogIn</Nav.Link>
                                    
                            }   
                        </Nav>
                        
                    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </>
    );
};

export default Header;