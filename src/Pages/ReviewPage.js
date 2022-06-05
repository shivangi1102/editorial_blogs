import React from 'react'
import { Form,Button } from 'react-bootstrap'
import './style.css'

const ReviewPage = () => {
  return (
    <div className='container'>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Article/Blog Name</Form.Label>
    <Form.Control type="text" disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={6} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Author Name</Form.Label>
    <Form.Control type="text" disabled/>
  </Form.Group>
  <br/>
  <Button variant="success" type="submit">
    Accept
  </Button>
  <Button variant="danger" type="submit">
    Reject
  </Button>
</Form>
</div>
  )
}

export default ReviewPage