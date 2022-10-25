import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './Cources.css'
import { Button } from 'react-bootstrap';
function Cources() {
    const cources = useLoaderData()
    console.log(cources)
    return (
        <div className='container'>
            <div className='row'>
                {cources.map((cours) => {
                    const { name, img, price, duration } = cours
                    return (
                        <div className='col-md-4 mb-4'>
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
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cources