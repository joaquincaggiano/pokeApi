// Hooks
import { useContext, useState } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./Pagination.module.css";

const Pagination = (ref) => {
  const {
    totalPokemon,
    actualPage,
    goToPage,
    totalOfpage,
    handlerURL,
    prevPage,
    nextPage,
  } = useContext(PokemonContext);

  const [showMenu, setShowMenu] = useState(false);

  const handlePokebolaMenu = () => {
    setShowMenu(!showMenu);
  };
  const current = actualPage + 1

  return (
    <>
      {/* MOBILE */}
      <div className={classes.paginationMobile}>
        <div
          className={!showMenu ? classes.pokebola : classes.pokebola2}
          onClick={handlePokebolaMenu}
        >
          <div className={classes.detailPokebola}></div>
        </div>

        <div
          className={!showMenu ? classes.visibilityMenu : classes.optionsMobile}
        >
          <li>Total Pokemon: {totalPokemon}</li>
          <li>Page: {current}</li>
          <li>
            Go to page:{" "}
            <select
              data-type="goTo"
              onChange={(e) => goToPage(e)}
              value={current}
            >
              {" "}
              {Array.from(Array(totalOfpage).keys()).map((page, i) => {
                return (
                  <option key={i} value={page}>
                    {page}
                  </option>
                );
              })}
            </select>
          </li>
        </div>
        <div className={classes.buttonsMobileBox}>
          {prevPage && (
            <button
              className={classes.buttonMobile}
              data-type="prev"
              onClick={handlerURL}
            >
              Prev
            </button>
          )}
          {nextPage && (
            <button
              className={classes.buttonMobile}
              data-type="next"
              onClick={handlerURL}
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* DESKTOP */}
      <div className={classes.paginationDesktop}>
        <li>Total Pokemon: {totalPokemon}</li>
        <li>Page: {actualPage}</li>
        <li>
          Go to page:{" "}
          <select
            data-type="goTo"
            onChange={(e) => goToPage(e)}
            value={actualPage}
          >
            {Array.from(Array(totalOfpage).keys()).map((page, i) => {
              return (
                <option key={i} value={page}>
                  {page}
                </option>
              );
            })}
          </select>
        </li>
        
          {prevPage && (
            <button
              className={classes.buttonsDesktop}
              data-type="prev"
              onClick={handlerURL}
            >
              Prev
            </button>
          )}
          {nextPage && (
            <button
              className={classes.buttonsDesktop}
              data-type="next"
              onClick={handlerURL}
            >
              Next
            </button>
          )}
        
      </div>
    </>
  );
};

export default Pagination;
