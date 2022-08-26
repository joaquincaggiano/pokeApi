// CreateContext
import { createContext } from "react";

// Hooks
import { useRef, useState } from "react";

// Axios
import axios from "axios";
//navigate
import { useNavigate } from "react-router-dom";

//validation
import {reducer, errorsState, ACTIONS} from './validationReducer'


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // STATES
  const [userLogged, setUserLogged] = useState()

  // REFERENCIAS DE INPUTS
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // REGISTER
  async function register() {
    let userCreated = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("user created", userCreated);
    try {
      await axios
        .post("http://localhost:3030/api/user/create", userCreated)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => console.log("Error", error));
      } catch{
        console.error()
      }
  }

  // LOGIN
  const login = async () => {
    let userToLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
      await axios
        .post("http://localhost:3030/api/user/login", userToLogin)
        .then((response) => {
          if (response.data.status === 400) {
            console.log("LAS CREDENCIALES NO COINCIDEN")
          } else {
            console.log("USUARIO LOGEADO", response.data.user);
            setUserLogged({...response.data.user})
            navigate('/')
          }
          console.log("response", response);
        })
        .catch((error) => console.log("Error", error));
      } catch{
        console.error()
      }
    }
    console.log("User STATE",userLogged)

  const userDataProvider = {
    register,
    login,
    userNameRef,
    emailRef,
    passwordRef,
    userLogged,
    reducer, 
    errorsState,
    ACTIONS
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
