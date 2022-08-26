// Hooks
import { useContext } from "react";

// router
import {useNavigate} from "react-router-dom";

//  Context
import {UserContext} from "../../context/userContext"

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

function Register(props) {
  const {register, userNameRef, emailRef, passwordRef} = useContext(UserContext)
  let navigate = useNavigate()

  function handleOnSubmit(e){
    e.preventDefault()
    register();
    return navigate('login')
  }

  return (
    <Container>
    <Form onSubmit={(e)=> handleOnSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name:</Form.Label>
        <Form.Control
          ref={userNameRef}
          type="text"
          placeholder="Escribí tu nombre de usuario"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          ref={emailRef}
          type="email"
          placeholder="Escribí tu email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>

    </Container>
  );
}

export default Register;
