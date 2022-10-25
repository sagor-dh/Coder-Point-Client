import React from 'react'
import { Button, FormText } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div className='form'>
            <Form >
                <h1 className='mb-3'>Registration</h1>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <FormText>If you have a already account? <Link to='/login'>Login</Link> </FormText>
                <br />
                <Button variant="primary" type="submit">Registration</Button>
            </Form>
        </div>
    )
}

export default Registration