import React from "react";
// Assets
import logoPokemon from "../../img/footer.jpg";

// Hook
import { useRef, useState } from "react";

// Router
import { Link } from "react-router-dom";

// UseContext
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

// Css
import classes from "./Header.module.css";

function Header() {
  // Context
  const { userLogged } = useContext(UserContext);

  // useRef
  const menu = useRef();

  // useState
  const [showMenu, setShowMenu] = useState(false);
  // const [menuVisibility, setMenuVisibility] = useState("d-none");

  const handleMenuMobile = () => {
    setShowMenu(!showMenu);
    // if (showMenu) {
    //   setMenuVisibility("d-block");
    // } else {
    //   setMenuVisibility("d-none");
    // }
  };

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
            ></i>
            <ul>
              <li>
                <Link className={classes.linkStyle} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={classes.linkStyle} to="/characters">
                  Pokemones
                </Link>
              </li>
              <li>
                <Link className={classes.linkStyle} to="/user/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={`${classes.navMobile}`}>
            <i
              className={`fa-solid fa-bars text-white ${classes.visibilityBurguer}`}
              onClick={handleMenuMobile}
            ></i>
            <div
              className={`${classes.divMobile} ${!showMenu ? classes.divMobileVisibility : ""}`}
              ref={menu}
            >
              <li className={classes.liMobile}>
                <Link className={classes.linkStyle} to="/">
                  Home
                </Link>
              </li>
              <li className={classes.liMobile}>
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
            <li className={classes.visibilityNav}>
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
            <li className={classes.visibilityNav}>
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
