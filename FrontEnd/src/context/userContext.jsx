// CreateContext
import { createContext } from "react";

// Hooks
import { useRef, useState } from "react";

// Axios
import axios from "axios";

//navigate
import { useNavigate } from "react-router-dom";

//validation
import { reducer, errorsState, ACTIONS } from "../reducer/validationReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // STATES
  const [userLogged, setUserLogged] = useState();
  const [validationLogin, setValidationLogin] = useState("");
  const [file, setFile] = useState();


  // REFERENCIAS DE INPUTS
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // REGISTER
  async function register() {
    const dataUser = new FormData();
    dataUser.append("userName", userNameRef.current.value);
    dataUser.append("email", emailRef.current.value);
    dataUser.append("password", passwordRef.current.value);
    dataUser.append("file", file);

    
    // let userCreated = {
    //   userName: userNameRef.current.value,
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value,
    // };
    // console.log("user created", userCreated);
    try {
      axios
        .post("http://localhost:3030/api/user/create", dataUser)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => console.log("Error", error));
    } catch {
      console.error();
    }
  }

  // LOGIN
  const login = () => {
    let userToLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // try {
    axios
      .post("http://localhost:3030/api/user/login", userToLogin)
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          setUserLogged({ ...response.data.user });
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setValidationLogin("You must complete all the fields");
          console.log("You must complete all the fields", validationLogin);
        } else if (error.response.status === 401) {
          setValidationLogin("Credentials do not match");
          console.log("Credentials do not match", validationLogin);
        } else if (error.response.status === 404) {
          setValidationLogin("User not found");
          console.log("User not found", validationLogin);
        }
      });
  };
  // console.log("User STATE", userLogged);
  // console.log("validation login", validationLogin)

  const userDataProvider = {
    register,
    login,
    userNameRef,
    emailRef,
    passwordRef,
    userLogged,
    reducer,
    errorsState,
    ACTIONS,
    validationLogin,
    setFile
    // msgErrorLogin,
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
