import React from "react";
import { Link } from "react-router-dom";
import pikapika from '../../img/waving-pikachu.gif'
function Home() {
  return (
    <>
      <h1>ESTE ES EL HOME POKEMON</h1>
      <img src={pikapika} alt="" />
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
    </>
  );
}

export default Home;
