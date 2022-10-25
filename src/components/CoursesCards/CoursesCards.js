import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './CoursesCards.css'
import { Link } from 'react-router-dom';

function CoursesCards({ cours }) {
    const {id, name, img, price, duration } = cours
    return (
        <div>
            <div className='card_container position-relative'>
                <Card className='front_side h-100'>
                    <Card.Img className='card_img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Duration: {duration}</Card.Text>
                        <b>Price: ${price}</b>
                    </Card.Body>
                </Card>
                <Card className='h-100 position-absolute top-0 back_side'>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button>Add to Cart</Button>
                        <Link to={`/details/${id}`}>Details</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CoursesCards