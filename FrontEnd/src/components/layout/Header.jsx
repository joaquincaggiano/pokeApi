import React from "react";
// Assets
import logoPokemon from "../../img/footer.jpg";

// Router
import { Link } from "react-router-dom";

// UseContext
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

// Css
import classes from "./Header.module.css";

function Header() {
  const { userLogged } = useContext(UserContext);
  return (
    <header>
      <nav>

        <Link to="/">
          <img src={logoPokemon} alt="pokemon" className={classes.logoPokemon}/>
        </Link>

        <i className={`fa-solid fa-bars text-white ${classes.visibilityBurguer}`}></i>

        {userLogged ? (
          <div className={classes.liBox}>
             <li className={classes.visibilityNav}>
              <Link
                className={classes.linkStyle}
                to="/characters"
              >
                Pokemones
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link
                className={classes.linkStyle}
                to="/user/profile"
              >
                Profile
              </Link>
            </li>
          </div>
        ) : (
          <div className={classes.liBox}>
            <li className={classes.visibilityNav}>
              <Link
                className={classes.linkStyle}
                to="/characters"
              >
                Pokemones
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link
                className={classes.linkStyle}
                to="/user/create"
              >
                Register
              </Link>
            </li>
            <li className={classes.visibilityNav}>
              <Link
                className={classes.linkStyle}
                to="/user/login"
              >
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
