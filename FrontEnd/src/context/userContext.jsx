// CreateContext
import { createContext } from "react";

// Hooks
import { useRef, useState, useEffect } from "react";

// Axios
import axios from "axios";

//validation
import { reducer, errorsState, ACTIONS } from "../reducer/validationReducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // STATES
  const [userLogged, setUserLogged] = useState(false);
  const [validationLogin, setValidationLogin] = useState("");
  const [file, setFile] = useState();
  const [onePokeImage, setOnePokeImage] = useState({});
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(true);
  const [isLoading, setIsLoading] = useState(true)
  // REFERENCIAS DE INPUTS
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();


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
          let userLoggedObject = {
            id: response.data.user.id,
            userName: response.data.user.userName,
            email: response.data.user.email,
            file: response.data.user.file,
          };
          localStorage.setItem("user", JSON.stringify(userLoggedObject));
          setFile(userLoggedObject.file);
          setUserLogged(true);
          setIsLoading(false);
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

  //UPDATE USER
  async function updateProfile () {
    try {
      const userUpdateData = new FormData();
      userUpdateData.append("userName", userNameRef.current.value);
      userUpdateData.append("email", emailRef.current.value);
      userUpdateData.append("password", passwordRef.current.value);
      userUpdateData.append("file", file);

      const userToUpdate = JSON.parse(localStorage.getItem("user"));
      axios
      .put(
        `http://localhost:3030/api/user/update/${userToUpdate.id}`,
        userUpdateData
      )
      .then((response) => {
        console.log("USUARIO ACTUALIZADO", response);
        if(response.status === 200) {
          const userUpdated = {
            id: response.data.user.id,
            userName: response.data.user.userName,
            email: response.data.user.email,
            file: response.data.user.file,
          };
          localStorage.setItem("user", JSON.stringify(userUpdated));
          setIsLoadingUpdate(false)
        }
      })
      .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE USER
  function deleteUser(){
    const userToDelete = JSON.parse(localStorage.getItem("user"));
    axios
    .delete(
      `http://localhost:3030/api/user/delete/${userToDelete.id}`
    )
    .then((response) => {console.log("response delete",response)})
    .catch(error => console.log(error))
  }

  // Pokemon random
  const pokemonRandom = Math.floor(Math.random() * 150);

  function getOneImage() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`)
      .then((response) => {
        setOnePokeImage({
          img: response.data.sprites.other.dream_world.front_default,
          name: response.data.name.toUpperCase(),
        });
      });
  }

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
    setUserLogged,
    getOneImage,
    onePokeImage,
    updateProfile,
    file,
    isLoadingUpdate,
    setIsLoadingUpdate,
    deleteUser,
    isLoading,
    setIsLoading
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
