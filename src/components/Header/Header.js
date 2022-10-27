import React from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Header.css'

function Header() {
    const { user, userLogOut } = useContext(AuthContext)
    console.log(user)
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
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-primary me-4' : 'text-decoration-none text-black me-4'} to='/'>Home</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-primary me-4' : 'text-decoration-none text-black me-4'} to='/courses'>Courses</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-primary me-4' : 'text-decoration-none text-black me-4'} to='/fqa'>FQA</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-primary me-4' : 'text-decoration-none text-black me-4'} to='/block'>Block</NavLink>
                            {
                                user && user?.uid ? <>
                                    <FaUser title={user.displayName}/>
                                    <Button onClick={()=> userLogOut()}>Log Out</Button>

                                </> : <Button> <NavLink className='text-white text-decoration-none' to='/login'>Login</NavLink></Button>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header