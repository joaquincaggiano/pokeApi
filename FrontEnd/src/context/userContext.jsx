// CreateContext
import { createContext } from "react";

// Hooks
import { useRef } from "react";

// Navigate
import { Navigate } from "react-router-dom";

// Axios
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

//   let navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    let userCreated = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("user created", userCreated);
    await axios
      .post("http://localhost:3030/api/user/create", userCreated)
      .then((response) => {
        console.log("response", response);
        // if(response.status === 200 ) {
        //   navigate("/")
        // }
      })
      .catch((error) => console.log("Error", error));
    console.log("registered", userCreated);
    <Navigate to="/user/login"/>
  }

  const userDataProvider = {
    handleOnSubmit,
    userNameRef,
    emailRef,
    passwordRef
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
