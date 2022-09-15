// Hooks
import { useContext, useReducer, useEffect } from "react";

//  Context
import { UserContext} from "../../context/userContext";

// Boostrap
import { Form, Button, Container, Card } from "react-bootstrap";

// Css
import styles from "./Login.module.css"

const Login = () => {
  // UseContext
  const {
    login,
    emailRef,
    passwordRef,
    reducer,
    errorsState,
    ACTIONS,
    validationLogin,
    getOneImage,
    onePokeImage
  } = useContext(UserContext);

  // Reducer States
  const [state, dispatch] = useReducer(reducer, errorsState);

  useEffect(()=>{
    getOneImage()
  }, [])

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
    <Container className='pt-5'>

    <Card className={`pt-3 w-75 m-auto rounded text-white`} style={{background: 'rgb(255, 255, 255, 0.3)', backdropFilter: 'blur(5px)'}}>
      
        <h2>{onePokeImage.name}</h2>
        <img className={styles.imageFormat} src={onePokeImage.img}/>
      
      <Form className={`text-white p-3 align-self-center container-fluid `} onSubmit={loginSubmitHandler}>
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
        <Button className={`${styles.buttonUpdate} `} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Card>
          
   </Container>
  );
};

export default Login;
