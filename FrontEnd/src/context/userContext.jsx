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
  const [onePokeImage, setOnePokeImage] = useState({})

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
            id: response.data.user.id,
            userName: response.data.user.userName,
            email: response.data.user.email,
            file: response.data.user.file,
          };
          localStorage.setItem("user", JSON.stringify(userLogged));
          setFile(userLogged.file)
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
  const updateProfile = ()=>{
    const userToUpdate = JSON.parse(localStorage.getItem("user"));
    console.log("USER TO UPDATE", userToUpdate)
    const userUpdated = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      file: file
    }
    axios.put(`http://localhost:3030/api/user/update/${userToUpdate.id}`, userUpdated)
      .then(response => {
        console.log("USUARIO ACTUALIZADO", response);
        let userUpdated = {
          id: response.data.user.id,
          userName: response.data.user.userName,
          email: response.data.user.email,
          file: response.data.user.file,
        };
        localStorage.setItem("user", JSON.stringify(userUpdated));
      }
      )
      .catch(error => console.log(error))
  }

  // Pokemon random
  const pokemonRandom = Math.floor(Math.random()*150)

  function getOneImage (){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`)
    .then(response => {
        setOnePokeImage({img: response.data.sprites.other.dream_world.front_default, name: response.data.name.toUpperCase()})
    })
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
    file
  };

  return (
    <UserContext.Provider value={userDataProvider}>
      {children}
    </UserContext.Provider>
  );
};
