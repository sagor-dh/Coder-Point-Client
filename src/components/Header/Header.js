import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink>
                            <img className='logo' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png" alt="logo" />
                            <br />
                            <span className='logo_text'>Coder Point</span>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <NavLink to='/'>Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/courses'>Courses</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/fqa'>FQA</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/block'>Block</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to='/login'>Login</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header