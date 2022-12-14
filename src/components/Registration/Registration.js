import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Button, FormText } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

function Registration() {
    const { userRegistration, userUpdateProfile } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        userRegistration(email, password)
            .then(() => {
                userUpdateProfile(name, photoURL)
                    .then(() => { })
                    .catch(() => { })

            })
            .catch((error) => { setError(error.message) })
        form.reset()
    }

    return (
        <div className='form'>
            <Form onSubmit={handleForm}>
                <h1 className='mb-3'>Registration</h1>
                <i className='text-danger'>{error}</i>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhoto">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter PhotoURl" />
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
                <Button className='mt-3' variant="primary" type="submit">Registration</Button>
            </Form>
        </div>
    )
}

export default Registration