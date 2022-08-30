// Hooks
import { useContext,useReducer } from "react";

// router
import { useNavigate } from "react-router-dom";

//  Context
import { UserContext } from "../../context/userContext";

// Boostrap
import { Form, Button, Container } from "react-bootstrap";

// Function reducer and initial state
const userNameReducer = (state, action) => {
  if(action.type === "USER_NAME_CHANGE") {
    return {value: action.value, isValid: action.value.trim().length > 6, msg: action.msg, isTouched: state.isTouched}
  }
  if(action.type === "USER_NAME_BLUR") {
    return {value: state.value, isValid: action.value.trim() !== "", msg: action.msg, isTouched: true}
  }
  return {value: "", isValid: false, msg: "", isTouched: false};
}

const emailReducer = (state, action) => {
  if(action.type === "EMAIL_CHANGED"){
    return {value: action.value, isValid: action.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g), msg: action.msg, isTouched: state.isTouched}
  }

  if(action.type === "EMAIL_BLUR") {
    return {value: state.value, isValid: action.value.trim() !== "", msg: action.msg, isTouched: true}
  }
  return {value: "", isValid: false, msg: "", isTouched: false};
}

const passwordReducer = (state, action) => {
  if(action.type === "PASSWORD_CHANGED") {
    return {value: action.value, isValid: action.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/), msg: action.msg, isTouched: state.isTouched}
  }
  if(action.type === "PASSWORD_BLUR") {
    return {value: state.value, isValid: action.value.trim() !== "", msg: action.msg, isTouched: true}
  }
  return {value: "", isValid: false, msg: "", isTouched: false};
}

const initialState = {
  value: "",
  isValid: false,
  msg: "",
  isTouched: false,
}

function Register(props) {
  // State
  // const [formIsValid, setFormIsValid] = useState(false);

  // Reducer States
  const [userNameState, dispatchUserName] = useReducer(userNameReducer, initialState);
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialState);

  // CONTEXT
  const { register, userNameRef, emailRef, passwordRef } =
    useContext(UserContext);

  // Navigate
  let navigate = useNavigate();

  let formIsValid = false

  if(userNameState.isValid && emailState.isValid && passwordState.isValid) {
    formIsValid = true;
  }

  // Submit function
  function handleOnSubmit(e) {
    e.preventDefault();
    register();
    return navigate("/user/login");
  }

  // VALIDATION FUNCTION
  const userNameChangeHandler = (e) => {
    dispatchUserName({type: "USER_NAME_CHANGE", value: e.target.value, msg: "Debe contener al menos 7 caracteres"})
  }

  const userNameBlur = (e) => {
    dispatchUserName({type: "USER_NAME_BLUR", value: e.target.value, msg: "No puede estar vacío"})
  }

  const emailChangeHandler = (e) => {
    dispatchEmail({type: "EMAIL_CHANGED", value: e.target.value, msg: "Debe ser un email válido"})
  };

  const emailBlurHandler = (e) => {
    dispatchEmail({type: "EMAIL_BLUR", value: e.target.value, msg: "No puede estar vacío"})
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({type: "PASSWORD_CHANGED", value: e.target.value, msg: "Mínimo 8 caracteres, al menos una Mayúscula, una minúscula y un número"})
  };

  const passwordBlurHandler = (e) => {
    dispatchPassword({type: "PASSWORD_BLUR", value: e.target.value, msg: "No puede estar vacío"})
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">User Name:</Form.Label>
          <Form.Control
            onChange={userNameChangeHandler}
            onBlur={userNameBlur}
            name="Username"
            ref={userNameRef}
            type="text"
            placeholder="Escribí tu nombre de usuario"
            value={userNameState.value}
          />
          {!userNameState.isValid && <span className="text-danger">{userNameState.msg}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email:</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Escribí tu email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {!emailState.isValid && <span className="text-danger">{emailState.msg}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white">Password:</Form.Label>
          <Form.Control
            name="Password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordState.value}
          />
          {!passwordState.isValid && <span className="text-danger">{passwordState.msg}</span>}
        </Form.Group>

        <Button disabled={!formIsValid} variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
