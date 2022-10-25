import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CoursDetails() {
    const cours = useLoaderData()
    console.log(cours)
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={cours.img} />
                <Card.Body>
                    <Card.Title>{cours.name}</Card.Title>
                    <Card.Text>{cours.details}</Card.Text>
                    <Card.Text>{cours.price}</Card.Text>
                    <Card.Text>{cours.duration}</Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <Button variant="primary">Downlode PDF</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CoursDetails