// Hooks
import { useContext, useReducer } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {
  // Router
  const navigate = useNavigate();

  // UseContext
  const {
    login,
    emailRef,
    passwordRef,
    userLogged,
    reducer,
    errorsState,
    ACTIONS,
    validationLogin,
    // msgErrorLogin
  } = useContext(UserContext);

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  // Validation reducer
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

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <Container>
      <Form className="text-white" onSubmit={loginSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            data-type={ACTIONS.EMAIL_FORMAT}
            data-msg="Please enter a valid email"
            ref={emailRef}
            type="email"
            placeholder="Escribí tu email"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {state.emailFormat.isValid === false && (
            <span className="text-danger">{state.emailFormat.msg}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            data-type={ACTIONS.PASSWORD_FORMAT}
            // data-msg="Please enter your password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {state.passwordFormat.isValid === false && (
            <span className="text-danger">{state.passwordFormat.msg}</span>
          )}
        </Form.Group>

        {validationLogin && (
          <div className="text-danger">{validationLogin}</div>
        )}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
