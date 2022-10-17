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
import ModalQuestion from '../components/Characters/ModalQuestion.jsx'
import GuestRoutes from "./GuestsRoutes";
import PrivateRoutes from "./PrivateRoutes";
import CaughtPokemons from "../components/User/CaughtPokemons";
import SearchPokemon from "../components/Characters/SearchPokemon";
import TriviaForm from '../components/Trivia/TriviaForm'
import TriviaQuestions from '../components/Trivia/TriviaQuestions'
import TriviaEditForm from "../components/Trivia/TriviaEditForm";
import NotFound from "../components/layout/NotFound";



function PokemonRoutes() {
  const { setUserLogged, setIsAdmin, isAdmin } = useContext(UserContext);
  useEffect(()=>{
    let userInLocalStorage = JSON.parse(localStorage.getItem('user'))
    if (userInLocalStorage !== null){
      setUserLogged(true)
      if(userInLocalStorage.role === 'ADMIN'){
        setIsAdmin(true)
      }else{
        setIsAdmin(false)
      }
    }else{
      setUserLogged(false)
    }
  }, [])
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      {/* NOT FOUND*/}
      <Route path="/404" element={<NotFound />} />

      {/* User */}
      <Route path="/user/create" element={<GuestRoutes><Register /></GuestRoutes>} />
      <Route path="/user/login" element={<GuestRoutes><Login /></GuestRoutes>}/>
      <Route path="/user/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
      <Route path="/user/caught-pokemons" element={<PrivateRoutes><CaughtPokemons /></PrivateRoutes>} />
      <Route path="/user/update/:id" element={<PrivateRoutes><UpdateUser /></PrivateRoutes>} />

      {/* Pokemons */}
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<Characters />} />
      <Route path="/search/:id" element={<SearchPokemon />} />

      {/* Trivias */}
      <Route path="/trivia" element={<ModalQuestion />} />
      <Route path="/trivia/create" element={<PrivateRoutes><TriviaForm /></PrivateRoutes>} />
      <Route path="/trivia/viewAll" element={<PrivateRoutes><TriviaQuestions /></PrivateRoutes>} />
      <Route path="/trivia/update/:id" element={<PrivateRoutes><TriviaEditForm /></PrivateRoutes>} />
    </Routes>
  );
}

export default PokemonRoutes;
