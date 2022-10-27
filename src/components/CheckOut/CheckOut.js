import React from 'react'
import Card from 'react-bootstrap/Card';

function CheckOut() {
  return (
    <div className='container'>
      <Card className='d-flex align-items-center' style={{width: '300px', margin: 'auto'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CheckOut