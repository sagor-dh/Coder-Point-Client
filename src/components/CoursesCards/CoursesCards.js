import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './CoursesCards.css'
import { Link } from 'react-router-dom';

function CoursesCards({ cours }) {
    const { id, name, img, price, duration, detalis } = cours
    return (
        <div>
            <div className='card_container position-relative'>
                <Card className='front_side h-100'>
                    <Card.Img className='card_img p-4' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="fs-3 fw-blod">{name}</Card.Title>
                        <Card.Text className='mb-0 mt-4'><b>Duration:</b> <small>{duration}</small></Card.Text>
                        <Card.Text><b>Price:</b> <small>${price}</small></Card.Text>
                    </Card.Body>
                </Card>
                <Card className='h-100 position-absolute top-0 back_side'>
                    <Card.Body className="d-flex justify-content-center align-items-center flex-column text-center">
                        <Card.Text>{detalis.length > 100 ? <span>{detalis.slice(0,100) + '...'}</span>: <span>{detalis}</span>}</Card.Text>
                        <div>
                            <Button className='me-2' variant="info">Add to Cart</Button>
                            <Button className='ms-2' variant="outline-info">
                                <Link className='text-black text-decoration-none ' to={`/details/${id}`}>Details</Link>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CoursesCards