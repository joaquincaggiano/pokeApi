import React from "react";
import logoPokemon from "../../img/footer.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <nav className="d-flex justify-content-around align-items-center">
        <Link to="/"><img src={logoPokemon} alt="pokemon" style={{ width: "200px" }} /></Link>
        <div className="d-flex justify-content-around">
          <li className="list-unstyled me-4">
            <Link className="text-decoration-none text-white fs-4" to="/characters">Pokemones</Link>
          </li>
          <li className="list-unstyled me-4">
            <Link className="text-decoration-none text-white fs-4" to="/user/create">Register</Link>
          </li>
          <li className="list-unstyled me-4">
            <Link className="text-decoration-none text-white fs-4" to="/user/login">Login</Link>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;
