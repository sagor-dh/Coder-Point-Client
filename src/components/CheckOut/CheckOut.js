import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

function CheckOut() {
  const cours = useLoaderData()
  return (
    <div className='container mt-5'>
      <Card style={{ width: '380px', margin: 'auto' }}>
        <div className='d-flex justify-content-between align-content-center'>
          <Card.Img variant="top" src={cours.img} style={{ width: '120px', height: '120px', margin: 'auto' }} />
          <Card.Body >
            <Card.Title>Cours Name: {cours.name}</Card.Title>
            <Card.Text>Duration: {cours.duration}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}

export default CheckOut