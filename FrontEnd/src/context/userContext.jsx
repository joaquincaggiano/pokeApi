// CreateContext
import { createContext } from "react";

// Hooks
import { useRef } from "react";

// Axios
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function register(e) {
    e.preventDefault();
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

  const userDataProvider = {
    register,
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
