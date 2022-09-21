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
    setActualURL
  } = useContext(PokemonContext);

  const [showMenu, setShowMenu] = useState(false);
  const [pokemonToSearch, setPokemonToSearch] = useState("")

  const handlePokebolaMenu = () => {
    setShowMenu(!showMenu);
  };

  const searchPokemonHandler = () => {
    setActualURL(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
  }

  const searchKeyHandler = (e) => {
    if(e.key === "Enter"){
      setActualURL(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
    }
  }

  const pokemonToSearchHandler = (e) => {
    setPokemonToSearch(e.target.value)
  }

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
          <li>Page: {actualPage}</li>
          <li>
            Go to page:{" "}
            <select
              data-type="goTo"
              onChange={(e) => goToPage(e)}
              value={actualPage}
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
          <div className={classes.searchBox}>
            <i onClick={searchPokemonHandler} className={`fa-solid fa-magnifying-glass ${classes.iSearch}`}></i>
            <input onKeyDown={searchKeyHandler} onChange={pokemonToSearchHandler} className={classes.inputSearch} type="search" placeholder="Pokemon name - nº" />
          </div>
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

        <div className={classes.rowOne}>
          <div className={classes.searchBox}>
            <i onClick={searchPokemonHandler} className={`fa-solid fa-magnifying-glass ${classes.iSearch}`}></i>
            <input onKeyDown={searchKeyHandler} onChange={pokemonToSearchHandler} className={classes.inputSearch} type="search" placeholder="Pokemon name - nº" />
          </div>

          <div className={classes.buttonsDesktopBox}>
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
        </div>

        <div className={classes.rowTwo}>
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
        </div>

      </div>
    </>
  );
};

export default Pagination;
