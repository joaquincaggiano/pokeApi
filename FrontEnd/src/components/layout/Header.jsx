import React from "react";
import logoPokemon from "../../img/footer.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <nav className="d-flex justify-content-around align-items-center">
        <Link to="/"><img src={logoPokemon} alt="pokemon" style={{ width: "200px" }} /></Link>
        <div className="d-flex justify-content-around">
          <li>
            <Link to="/characters">Pokemones</Link>
          </li>
          <li>
            <Link to="/user/create">Register</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;
