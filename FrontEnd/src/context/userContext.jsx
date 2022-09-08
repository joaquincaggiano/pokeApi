// CreateContext
import { createContext } from "react";

// Hooks
import { useRef, useState, useEffect } from "react";

// Axios
import axios from "axios";

//navigate
import { useNavigate } from "react-router-dom";

//validation
import { reducer, errorsState, ACTIONS } from "../reducer/validationReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // STATES
  const [userLogged, setUserLogged] = useState(false);
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
          console.log("USUARIO LOGEADO", response.data.user);
          let userLogged = {
            userName: response.data.user.userName,
            email: response.data.user.email,
            file: response.data.user.file,
          };
          localStorage.setItem("user", JSON.stringify(userLogged));
          setUserLogged(true)
          navigate("/user/profile");

          // setUserLogged({...response.data.user});
          // console.log("USER LOGGED", userLogged);
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

  //PROFILE
  // useEffect(()=>{
  //   if(localStorage.getItem('user')){
  //     setUserLogged(true)
  //   }
  // }, [])

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
    setFile,
    setUserLogged
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
