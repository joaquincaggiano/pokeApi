// Hooks
import { useContext, useState, useReducer, useEffect } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

function Register() {
  // CONTEXT
  const {
    register,
    userNameRef,
    emailRef,
    passwordRef,
    reducer,
    errorsState,
    ACTIONS,
  } = useContext(UserContext);

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  // useState
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect
  useEffect(() => {
    if(state.usernameLength.isValid && state.emailFormat.isValid && state.passwordFormat.isValid) {
      setFormIsValid(true)
    };
  }, [state.usernameLength.value, state.emailFormat.value, state.passwordFormat.value])

  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/login");
  }

  const onChangeHandler = (e) => {
    dispatch({
      type: e.target.dataset.type,
      payload: {
        value: e.target.value,
        msg: e.target.dataset.msg,
      },
    });
  };

  const onBlurHandler = (e) => {
    if (e.target.value.trim() === "") {
      dispatch({
        type: e.target.dataset.type,
        payload: { value: e.target.value, msg: "Field cannot be empty" },
      });
    }
  };

  return (
    <Container>
      <Form className="text-white" onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            data-type={ACTIONS.USERNAME_LENGTH}
            data-msg="Username must be at least 6 characters"
            name="Username"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            ref={userNameRef}
            type="text"
            placeholder="Escribí tu nombre de usuario"
          />
          {state.usernameLength.isValid === false && (
            <span className="text-danger">{state.usernameLength.msg}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            ref={emailRef}
            data-type={ACTIONS.EMAIL_FORMAT}
            data-msg="Please enter a valid email"
            name="Email"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="email"
            placeholder="Escribí tu email"
          />
          {state.emailFormat.isValid === false && (
            <span className="text-danger">{state.emailFormat.msg}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            data-type={ACTIONS.PASSWORD_FORMAT}
            data-msg="Password be at least 8 characters and must contain at least one upper case, one lower case and one number"
            name="Password"
            ref={passwordRef}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="password"
            placeholder="Password"
          />
          {state.passwordFormat.isValid === false && (
            <span className="text-danger">{state.passwordFormat.msg}</span>
          )}
        </Form.Group>

        <Button disabled={!formIsValid} variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
