// Hooks
import { useContext } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const { login, emailRef, passwordRef, userLogged } = useContext(UserContext);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login();
    // setTimeout(() => {
    //   if (userLogged) {
    //     navigate("/")
    //   }
    // }, 2000)
  };
  return (
    <Container>
      <Form className="text-white" onSubmit={loginSubmitHandler}>
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
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
