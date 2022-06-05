import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from 'react'
import './style.css';

export const SignUpPage = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    userType: "",
    answer: "",
    question: "",
  })
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecord = { ...userRegistration }
    console.log(newrecord);
  }
  const securityQuestion = "What is your pet name?"
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userRegistration.firstname,
        email: userRegistration.email,
        typeofacc: userRegistration.userType,
        question: userRegistration.question,
        answer: userRegistration.answer,
        password: userRegistration.password
      })
    };
    fetch('http://localhost:8080/EditorialBlog/signup', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <>
      <div className='container'>
        <h1> Sign Up </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstname" placeholder="Enter first name" value={userRegistration.firstname} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastname" placeholder="Enter last name" value={userRegistration.lastname} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={userRegistration.email} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" value={userRegistration.password} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Type</Form.Label>
            <Form.Select aria-label="Default select example" name="userType" value={userRegistration.userType} onChange={handleInput} >
              <option>Open this select menu</option>
              <option value="1">Super admin</option>
              <option value="2">Admin</option>
              <option value="3">Reader</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Security Question</Form.Label>
            <Form.Select aria-label="Default select example" name="question" value={userRegistration.question} onChange={handleInput} >
              <option>Choose security question</option>
              <option value="What is your pet name?">What is your pet name?</option>
              <option value="What is your school name?">What is your school name? </option>
              <option value="What is your nickname?">What is your nickname?</option>
              <option value="Who is your favourite actor?">Who is your favourite actor?</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="answer" value={userRegistration.answer} onChange={handleInput} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>

    </>
  )
}
