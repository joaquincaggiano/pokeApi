import React, {useRef, useEffect} from "react";
import axios from 'axios'
// Boostrap
import {Form, Button} from "react-bootstrap";

function Register(props) {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()



  // useEffect(() =>{
  //  userCreated = {
  //     userName: userNameRef?.current?.value,
  //     email: emailRef?.current?.value,
  //     password: passwordRef?.current?.value
  //   }
  // }, [userNameRef, emailRef, passwordRef])

// console.log("user outside function", userCreated)
  async function handleOnSubmit(e) 
  {
    e.preventDefault();
    let userCreated = {
      userName: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
    }
    console.log("user created", userCreated)
    await axios.post('http://localhost:3030/api/user/create', { userName: userNameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value})
    .then(response => console.log("response", response))
    console.log("registered", userCreated)
  };

  return (
    <Form onSubmit={(e)=>handleOnSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name:</Form.Label>
        <Form.Control ref={userNameRef} onChange={()=> console.log(userNameRef)} type="text" placeholder="Escribí tu nombre de usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Escribí tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Register;
