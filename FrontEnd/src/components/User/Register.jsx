// Hooks
import { useContext, useState, useReducer } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

// Function reducer
const userNameReducer = (state, action) => {
  if (action.type === 'USER_NAME') {
    return { value: action.val, isValid: action.val.length > 6 };
  }
}

function Register(props) {
  // Reducer States
  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: '',
    isValid: null,
  });

  // // STATE
  // const [usernameError, setUsernameError] = useState();
  // const [passwordError, setPasswordError] = useState();
  const [error, setError] = useState();

  // CONTEXT
  const { register, userNameRef, emailRef, passwordRef} =
    useContext(UserContext);
  
  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/login");
  }

  // VALIDATION FUNCTION
  // function handleOnChange(e) {
  //   let errorMsg = `${e.target.name} must be at least 6 characters`
  //     if (e.target.value.length < 6) {
  //       if(e.target.name === 'Password'){
  //         setPasswordError(errorMsg)
  //       } 
  //       if(e.target.name === 'Username') {
  //         setUsernameError(errorMsg)
  //       } 
  //     } else {
  //       if(e.target.name === 'Password'){
  //         setPasswordError('');
  //       } 
  //       if(e.target.name === 'Username') {
  //         setUsernameError('');
  //       } 
  //     }
  // }

  const userNameChangeHandler = (e) => {
    dispatchEmail({ type: 'USER_NAME', val: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            name='Username'
            onChange={userNameChangeHandler}
            ref={userNameRef}
            type="text"
            placeholder="Escribí tu nombre de usuario"
          />
          {/* {usernameError && <span className="text-danger">{usernameError}</span>} */}
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
            // onChange={handleOnChange}
            name='Password'
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
           {/* {passwordError && <span className="text-danger">{passwordError}</span>} */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
