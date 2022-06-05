import React from 'react'
import { Form,Button } from 'react-bootstrap'
import './style.css'
const Newarticle = () => {
  return (
    <>
    <div className='container'>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Article/Blog Name</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={6} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Author Name</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <br/>
  <Button variant="primary" type="submit">
    Submit for review
  </Button>
</Form>
</div>
    </>
  )
}

export default Newarticle