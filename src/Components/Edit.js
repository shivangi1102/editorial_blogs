import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import './style.css'
const Edit = (props) => {
  const location = useLocation();
  const [locations, setlocation] = useState({ id: '', title: '', authorname: '', content: '' });
  useEffect(() => {
    setlocation(location.state);
  }, [location])
  console.log(locations.id.id)
  return (
    <>
      <div className='container'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Article/Blog Name</Form.Label>
            <Form.Control type="text" value={locations.title.title} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={6} value={locations.content.content} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" value={locations.authorname.authorname} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit for review
          </Button>
        </Form>

      </div>
    </>
  )
}

export default Edit