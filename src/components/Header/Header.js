import React, { useState } from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaMoon, FaSun } from "react-icons/fa";

import './Header.css'

function Header() {
    const { user, userLogOut } = useContext(AuthContext)
    const [mood, setMood] = useState(false)
    const handleMood = () =>{
        setMood((currentMood)=> !currentMood)
    }
    return (
        <div>
            <Navbar expand="lg" className='navbar py-3'>
                <Container>
                    <Navbar.Brand>
                        <NavLink className='d-flex align-items-center text-decoration-none'>
                            <img className='logo' src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png" alt="logo" />

                            <span className='logo_text'>Coder Point</span>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto d-flex align-items-center'>
                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-black me-4' : 'text-decoration-none text-white me-4'} to='/home'>Home</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-black me-4' : 'text-decoration-none text-white me-4'} to='/courses'>Courses</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-black me-4' : 'text-decoration-none text-white me-4'} to='/fqa'>FQA</NavLink>

                            <NavLink className={({ isActive }) => isActive ? 'text-decoration-none text-black me-4' : 'text-decoration-none text-white me-4'} to='/block'>Block</NavLink>

                            {
                                user && user?.uid ? <>
                                    <img title={user.displayName} src={user.photoURL ? user.photoURL : `https://www.kindpng.com/picc/m/146-1468390_transparent-shadow-person-png-missing-profile-picture-icon.png`} alt={user.displayName} className="user_photo" />

                                    <Button variant='info' onClick={() => userLogOut()} className='logout_Btn text-white'>Log Out</Button>
                                </> : <Button> <NavLink className='text-white  text-decoration-none' to='/login'>Login</NavLink></Button>

                            }
                            <div onClick={handleMood} className='ms-4'>
                                {mood?<FaSun/>:<FaMoon/>}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header