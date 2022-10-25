import React from 'react'
import { Button, FormText } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'

function Login() {
    return (
        <div className='form'>
            <Form >
                <h1 className='mb-3'>Login</h1>
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
                <Button variant="primary" type="submit">Login</Button>
            </Form>
            <div>
                <Button className='w-100 mt-5'><FaGoogle/> Login with Google </Button>
                <Button className='w-100 mt-3'><FaGithub/> Login with Github </Button>
            </div>
        </div>
    )
}

export default Login