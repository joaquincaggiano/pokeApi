// Hooks
import { useContext } from "react";

//  Context
import {UserContext} from "../../context/userContext"

// Boostrap
import { Form, Button } from "react-bootstrap";

function Register(props) {
  const {handleOnSubmit, userNameRef, emailRef, passwordRef} = useContext(UserContext)

  return (
    <Form onSubmit={handleOnSubmit}>
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
  );
}

export default Register;
