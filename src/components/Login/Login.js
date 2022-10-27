import React, { useContext } from 'react'
import { Button, FormText } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useState } from 'react';

function Login() {
    const {userLogin, singInGoogle, singInGithub} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const url = location.state?.from?.pathname || '/'

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => { 
                navigate(url, {replace:true})
                form.reset()
             })
            .catch((error) => {setError(error.message) })
    }

    const handleGoogleLogin = () =>{
        singInGoogle()
        .then(()=> {
            navigate(url, {replace:true})
        })
        .catch(()=> {})
    }

    const handleGithubLogin = () =>{
        singInGithub()
        .then(()=> {
            navigate(url, {replace:true})
        })
        .catch(()=> {})
    }

    return (
        <div className='form'>
            <Form onSubmit={handleForm}>
                <h1 className='mb-3'>Login</h1>
                <i className='text-danger'>{error}</i>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <FormText>If you have no account? <Link to='/registration'>Registration</Link> </FormText>
                <br />
                <Button className='mt-3' variant="primary" type="submit">Login</Button>
            </Form>
            <div>
                <Button onClick={handleGoogleLogin} className='w-100 mt-5'><FaGoogle /> Login with Google </Button>
                <Button onClick={handleGithubLogin} className='w-100 mt-3'><FaGithub /> Login with Github </Button>
            </div>
        </div>
    )
}

export default Login