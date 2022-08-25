import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "../components/Home/Home";
import Register from "../components/User/Register";
import Characters from "../components/Characters/Characters";
import Login from "../components/User/Login";

function PokemonRoutes() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/user/create" element={<Register/>} />
    <Route path="/user/login" element={<Login/>} />
    <Route>Profile</Route>
    <Route path="/characters" element={<Characters/>} />
  </Routes>
  );
}

export default PokemonRoutes;
