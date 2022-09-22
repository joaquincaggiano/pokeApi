// Router
import { Routes, Route } from "react-router-dom";

// Context
// import { useContext } from "react";
// import { UserContext } from "../context/userContext";

// Components
import Home from "../components/Home/Home";
import Register from "../components/User/Register";
import Characters from "../components/Characters/Characters";
import Login from "../components/User/Login";
import Profile from "../components/User/Profile";
import UpdateUser from "../components/User/UpdateUser";
import GuestRoutes from "./GuestsRoutes";

function PokemonRoutes() {
  // const { userLogged } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <GuestRoutes> */}
        <Route path="/user/create" element={<Register />} />
      {/* </GuestRoutes> */}
      {/* <GuestRoutes> */}
        <Route path="/user/login" element={<Login />}/>
      {/* </GuestRoutes> */}
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/update/:id" element={<UpdateUser />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default PokemonRoutes;
