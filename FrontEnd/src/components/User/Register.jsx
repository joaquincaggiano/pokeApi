// Hooks
import { useContext, useState, useReducer } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

function Register(props) {
  
  // // STATE
  // const [usernameError, setUsernameError] = useState();
  // const [passwordError, setPasswordError] = useState();
  const [error, setError] = useState();
  
  // CONTEXT
  const { register, userNameRef, emailRef, passwordRef, reducer, errorsState, ACTIONS} =
  useContext(UserContext);
  
  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/login");
  }

  const onChangeHandler = (e) => {
    if (e.target.name === 'Username'){
      dispatch({ type: ACTIONS.USERNAME_LENGTH, payload: {value: e.target.value} });
    }else if(e.target.name === 'Email'){
      dispatch({ type: ACTIONS.EMAIL_FORMAT, payload: {value: e.target.value} });
  }else{
    dispatch({ type: ACTIONS.PASSWORD_FORMAT, payload: {value: e.target.value} });
  }};
  
console.log("STATE", state)
  return (
    <Container>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            name='Username'
            onChange={onChangeHandler}
            ref={userNameRef}
            type="text"
            placeholder="Escribí tu nombre de usuario"
          />
          {state.usernameLength.isInvalid === true && <span className="text-danger">{state.usernameLength.msg}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            ref={emailRef}
            name='Email'
            onChange={onChangeHandler}
            type="email"
            placeholder="Escribí tu email"
          />
            {state.emailFormat.isInvalid === true && <span className="text-danger">{state.emailFormat.msg}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            name='Password'
            ref={passwordRef}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
          />
            {state.passwordFormat.isInvalid === true && <span className="text-danger">{state.passwordFormat.msg}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
