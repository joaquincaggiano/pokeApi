// Hooks
import { useContext, useState, useReducer, useEffect } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container, Card } from "react-bootstrap";

// Css
import classes from "./Register.module.css"


// //Assets
// import Starter1 from "../../img/starter-gen1.png";
// import Starter2 from "../../img/starter-gen2.png";
// import Starter3 from "../../img/starter-gen3.png";
// import Starter4 from "../../img/starter-gen4.png";
// import Starter5 from "../../img/starter-gen5.png";

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
    setFile,
    onePokeImage,
    getOneImage
  } = useContext(UserContext);

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  // useState
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    getOneImage()
  }, [])

  // useEffect
  useEffect(() => {
    if (
      state.usernameLength.isValid &&
      state.emailFormat.isValid &&
      state.passwordFormat.isValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false)
    }
  }, [
    inputValue,
  ]);

  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/login");
  }

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
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

  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Container className="pt-5">
      <Card
        className="pt-3 w-75 m-auto rounded container-fluid"
        style={{
          background: "rgb(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <h2>{onePokeImage.name}</h2>
        <img className={classes.imageFormat} src={onePokeImage.img}/>
        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={(e) => handleOnSubmit(e)}
        >
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
              <span className={classes.errorMsg}>{state.usernameLength.msg}</span>
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
              <span className={classes.errorMsg}>{state.emailFormat.msg}</span>
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
              <span className={classes.errorMsg}>{state.passwordFormat.msg}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="avatarUpload">
            <Form.Label>
              Avatar - accepts extensions .jpg, .jpeg, .png:
            </Form.Label>
            <Form.Control
              size="sm"
              style={{ padding: "9px" }}
              name="Avatar"
              type="file"
              accept=".jpg, .jpeg, .png"
              placeholder="Avatar"
              onChange={onChangeFile}
            />
          </Form.Group>

          <Button
            // onClick={onSendHandler}
            disabled={!formIsValid}
            variant="primary"
            type="submit"
            className="w-100"
          >
            Registrarse
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
