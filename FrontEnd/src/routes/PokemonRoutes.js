// Router
import { Routes, Route } from "react-router-dom";

import {useEffect} from 'react'
// Context
import { useContext } from "react";
import { UserContext } from "../context/userContext";

// Components
import Home from "../components/Home/Home";
import Register from "../components/User/Register";
import Characters from "../components/Characters/Characters";
import Login from "../components/User/Login";
import Profile from "../components/User/Profile";
import UpdateUser from "../components/User/UpdateUser";
import GuestRoutes from "./GuestsRoutes";
import PrivateRoutes from "./PrivateRoutes";


function PokemonRoutes() {
  const { setUserLogged } = useContext(UserContext);
  useEffect(()=>{
    let userInLocalStorage = JSON.parse(localStorage.getItem('user'))
    if (userInLocalStorage !== null){
      setUserLogged(true)
    }else{
      setUserLogged(false)
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/create" element={<GuestRoutes><Register /></GuestRoutes>} />
      <Route path="/user/login" element={<GuestRoutes><Login /></GuestRoutes>}/>
      <Route path="/user/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
      <Route path="/user/update/:id" element={<PrivateRoutes><UpdateUser /></PrivateRoutes>} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default PokemonRoutes;
