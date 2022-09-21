import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "../components/Home/Home";
import Register from "../components/User/Register";
import Characters from "../components/Characters/Characters";
import Login from "../components/User/Login";
import Profile from "../components/User/Profile";
import UpdateUser from "../components/User/UpdateUser";
// import GuestRoutes from "./GuestsRoutes";

function PokemonRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user/create"
        element={
          // <GuestRoutes>
          <Register />
          // {/* // </GuestRoutes> */}
        }
      />
      <Route
        path="/user/login"
        element={
          // <GuestRoutes>
          <Login />
          // {/* </GuestRoutes> */}
        }
      />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default PokemonRoutes;
