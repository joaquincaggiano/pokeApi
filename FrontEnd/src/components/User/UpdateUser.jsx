// Hooks
import { useContext, useState, useReducer, useEffect } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container, Card, InputGroup } from "react-bootstrap";

//Styles
import classes from "./UpdateUser.module.css";

const UpdateUser = () => {
  // CONTEXT
  const {
    userNameRef,
    emailRef,
    passwordRef,
    reducer,
    errorsState,
    ACTIONS,
    setFile,
    updateProfile,
    // file
  } = useContext(UserContext);

  //User Logged
  let user = JSON.parse(localStorage.getItem("user"));

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);
  const [editEmail, setEditEmail] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  // const [inputValue, setInputValue] = useState('')

  // useState
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect
  // useEffect(() => {
  //   if (
  //     state.usernameLength.isValid &&
  //     state.emailFormat.isValid &&
  //     state.passwordFormat.isValid
  //   ) {
  //     setFormIsValid(true);
  //   }else {
  //     setFormIsValid(false)
  //   }
  // }, [
  //   inputValue,
  //   state.usernameLength.value,
  //   state.emailFormat.value,
  //   state.passwordFormat.value,
  // ]);

  // Navigate
  let navigate = useNavigate();

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    updateProfile();
    return navigate("/user/profile");
  }

  const onChangeHandler = (e) => {
    // setInputValue(e.target.value)
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

  function handleEdit(e) {
    if (e.target.dataset.type === "Email") {
      setEditEmail((current) => !current);
    } else if (e.target.dataset.type === "Username") {
      setEditUsername((current) => !current);
    } else {
      setEditPassword((current) => !current);
    }
  }

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
              // defaultValue={file}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name:</Form.Label>
            <InputGroup>
              <Form.Control
                data-type={ACTIONS.USERNAME_LENGTH}
                data-msg="Username must be at least 6 characters"
                name="Username"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                ref={userNameRef}
                type="text"
                placeholder="Escribí tu nombre de usuario"
                defaultValue={user.userName}
                disabled={!editUsername}
              />
              <Button
                style={{ height: "40px" }}
                variant={editUsername ? "light" : "secondary"}
                onClick={(e) => handleEdit(e)}
              >
                <i className="fa-solid fa-user-pen" data-type="Username"></i>
              </Button>
            </InputGroup>
            {state.usernameLength.isValid === false && (
              <span className={classes.errorMsg}>
                {state.usernameLength.msg}
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <InputGroup>
              <Form.Control
                ref={emailRef}
                data-type={ACTIONS.EMAIL_FORMAT}
                data-msg="Please enter a valid email"
                name="Email"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                type="email"
                disabled={!editEmail}
                style={{ height: "40px" }}
                // placeholder={user.email}
                // placeholder="Escribí tu email"
                defaultValue={user.email}
              />
              <Button
                style={{ height: "40px" }}
                variant={editEmail ? "light" : "secondary"}
                onClick={(e) => handleEdit(e)}
              >
                <i className="fa-solid fa-user-pen" data-type="Email"></i>
              </Button>
            </InputGroup>

            {state.emailFormat.isValid === false && (
              <span className={classes.errorMsg}>{state.emailFormat.msg}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <InputGroup>
              <Form.Control
                data-type={ACTIONS.PASSWORD_FORMAT}
                data-msg="Password be at least 8 characters and must contain at least one upper case, one lower case and one number"
                name="Password"
                ref={passwordRef}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                type="password"
                placeholder="Password"
                disabled={!editPassword}
              />
              <Button
                style={{ height: "40px" }}
                variant={editPassword ? "light" : "secondary"}
                onClick={(e) => handleEdit(e)}
              >
                <i className="fa-solid fa-user-pen" data-type="Password"></i>
              </Button>
            </InputGroup>
            {state.passwordFormat.isValid === false && (
              <span className={classes.errorMsg}>
                {state.passwordFormat.msg}
              </span>
            )}
          </Form.Group>

          <Button
            // disabled={!formIsValid}
            // onClick={onSendHandler}
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
