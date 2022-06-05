import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import './style.css';
import { SignUpPage } from './SignUpPage';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
   const [email,setEmail]=useState(" ");
   const [password,setPassword]=useState("");
   const [signup,setSignup]=useState(true);
   const nav = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newrecord={email,password}
        console.log(newrecord);
        nav("/home")
        
    } 
    const handleClick = ()=>{
        setSignup(!signup);
    }
  return (
   <>
   {signup ? 
   <div className='container'>
       <h1> Login </h1>
   <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email"value={email} onChange={(e)=> {setEmail(e.target.value)}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password"  value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
<h2 onClick={handleClick}>New to Editorial <b>Sign Up</b></h2>
   </div>:
   <SignUpPage/>
}
   </>
  )
}
