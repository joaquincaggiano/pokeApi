import React from "react";
// Assets
import logoPokemon from "../../img/footer.jpg";

// Hook
import { useRef, useState } from "react";

// Router
import { Link } from "react-router-dom";

// UseContext
import { UserContext } from "../../context/userContext";
import { PokemonContext } from "../../context/charactersContext";
import { useContext } from "react";

// Css
import classes from "./Header.module.css";

function Header() {
  // Context
  const { userLogged } = useContext(UserContext);
  const { setActualURL } = useContext(PokemonContext)

  // useState
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuMobile = () => {
    setShowMenu(!showMenu);
  };

  const showAllPokemonHandler = () => {
    setActualURL("https://pokeapi.co/api/v2/pokemon");
  }

  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src={logoPokemon}
            alt="pokemon"
            className={classes.logoPokemon}
          />
        </Link>

        {/* MOBILE */}
        {userLogged ? (
          <div className={`${classes.navMobile}`}>
            <i
              className={`fa-solid fa-bars text-white ${classes.visibilityBurguer}`}
              onClick={handleMenuMobile}
            ></i>
            <div
              className={`${classes.divMobile} ${
                !showMenu ? classes.divMobileVisibility : ""
              }`}
            >
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/">
                  Home
                </Link>
              </li>
              <li onClick={showAllPokemonHandler} className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/characters">
                  Pokemones
                </Link>
              </li>
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/user/profile">
                  Profile
                </Link>
              </li>
            </div>
          </div>
        ) : (
          <div className={`${classes.navMobile}`}>
            <i
              className={`fa-solid fa-bars text-white ${classes.visibilityBurguer}`}
              onClick={handleMenuMobile}
            ></i>
            <div
              className={`${classes.divMobile} ${
                !showMenu ? classes.divMobileVisibility : ""
              }`}
            >            
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/">
                  Home
                </Link>
              </li>
              <li onClick={showAllPokemonHandler} className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/characters">
                  Pokemones
                </Link>
              </li>
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/user/create">
                  Register
                </Link>
              </li>
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/user/login">
                  Login
                </Link>
              </li>
            </div>
          </div>
        )}

        {/* DESKTOP */}
        {userLogged ? (
          <div className={classes.liBox}>
            <li className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/">
                Home
              </Link>
            </li>
            <li onClick={showAllPokemonHandler} className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/characters">
                Pokemones
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/user/profile">
                Profile
              </Link>
            </li>
          </div>
        ) : (
          <div className={classes.liBox}>
            <li className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/">
                Home
              </Link>
            </li>
            <li onClick={showAllPokemonHandler} className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/characters">
                Pokemones
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/user/create">
                Register
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link className={classes.linkStyle} to="/user/login">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
