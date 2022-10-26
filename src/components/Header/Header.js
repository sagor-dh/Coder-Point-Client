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
                            <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-primary me-4': 'text-decoration-none text-black me-4'} to='/'>Home</NavLink>

                            <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-primary me-4': 'text-decoration-none text-black me-4'} to='/courses'>Courses</NavLink>

                            <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-primary me-4': 'text-decoration-none text-black me-4'} to='/fqa'>FQA</NavLink>

                            <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-primary me-4': 'text-decoration-none text-black me-4'} to='/block'>Block</NavLink>

                            <NavLink className={({isActive}) => isActive ? 'text-decoration-none text-primary': 'text-decoration-none text-black'} to='/login'>Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header