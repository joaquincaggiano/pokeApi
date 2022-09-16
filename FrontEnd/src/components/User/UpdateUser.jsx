// Hooks
import { useContext, useState, useReducer, useEffect } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container, Card } from "react-bootstrap";

//Styles
import classes from "./UpdateUser.module.css";

const UpdateUser = () => {
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
  } = useContext(UserContext);

  //User Logged
  let user = JSON.parse(localStorage.getItem("user"));

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  // useState
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect
  useEffect(() => {
    if (
      state.usernameLength.isValid &&
      state.emailFormat.isValid &&
      state.passwordFormat.isValid
    ) {
      setFormIsValid(true);
    }
  }, [
    state.usernameLength.value,
    state.emailFormat.value,
    state.passwordFormat.value,
  ]);

  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/profile");
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

  const onChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Container className="pt-5">
      <Card
        className={`pt-3 w-75 m-auto rounded container-fluid`}
        style={{
          background: "rgb(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
          <div className={classes.imgBox}>
            <img
              className={`rounded-circle`}
              src={`http://localhost:3030/images/${user.file}`}
            />
            <i className="fa-solid fa-camera"></i>
          </div>
        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={(e) => handleOnSubmit(e)}
        >

          <Form.Group className="mb-3" controlId="avatarUpload">
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
              // value={user.userName}
            />
            {state.usernameLength.isValid === false && (
              <span className={classes.errorMsg}>
                {state.usernameLength.msg}
              </span>
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
              // value={user.email}
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
              <span className={classes.errorMsg}>
                {state.passwordFormat.msg}
              </span>
            )}
          </Form.Group>

          <Button
            // onClick={onSendHandler}
            disabled={!formIsValid}
            variant="primary"
            type="submit"
            className="w-100"
          >
            Actualizar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default UpdateUser;
