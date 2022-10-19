// Hooks
import { useContext, useReducer, useEffect, useState } from "react";

//  Context
import { UserContext } from "../../context/userContext";

import { useNavigate } from "react-router-dom";


// Boostrap
import { Form, Button, Container, Card } from "react-bootstrap";

// Css
import classes from "./Login.module.css";

//Assets
import Starter1 from "../../img/starter-gen1.png";
import Starter2 from "../../img/starter-gen2.png";
import Starter3 from "../../img/starter-gen3.png";
import Starter4 from "../../img/starter-gen4.png";
import Starter5 from "../../img/starter-gen5.png";

const Login = () => {
  // Navigate
  const navigate = useNavigate();

  // UseContext
  const {
    login,
    emailRef,
    passwordRef,
    reducer,
    errorsState,
    ACTIONS,
    validationLogin,
  } = useContext(UserContext);

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);
  //Get random image for card.img
  const [starter, setStarter] = useState();

  const starterArray = [Starter1, Starter2, Starter3, Starter4, Starter5];

  Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  useEffect(() => {
    setStarter(starterArray.sample());
  }, []);

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
    navigate("/user/profile");
  };

  return (
    <Container className="pt-5">
      <Card
        className="pt-3 w-75 m-auto rounded text-white container-fluid"
        style={{
          background: "rgb(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Card.Img
          className="m-auto xs w-25 sm w-50 md w-75 "
          src={starter}
        ></Card.Img>

        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={loginSubmitHandler}
        >
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
              <div className={classes.msgErrorBox}><span className={classes.errorMsg}>{state.emailFormat.msg}</span></div>
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
              <div className={classes.msgErrorBox}><span className={classes.errorMsg}>
                {state.passwordFormat.msg}
              </span></div>
            )}
          </Form.Group>

          {validationLogin && (
            <div className={classes.errorMsg}>{validationLogin}</div>
          )}
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
