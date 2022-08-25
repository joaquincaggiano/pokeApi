import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/characters">Pokemones</Link>
          </li>
          <li>
            <Link to="/user/create">Register</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1>ESTE ES EL HOME POKEMON</h1>
    </>
  );
}

export default Home;
