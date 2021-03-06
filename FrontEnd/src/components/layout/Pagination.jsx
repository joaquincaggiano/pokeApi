// Hooks
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./Pagination.module.css"


const Pagination = () => {
  const {totalPokemon, actualPage, handlerURL, prevPage, nextPage, goToPage, totalOfpage} = useContext(PokemonContext);

  return (
    <div className={`${classes.paginationStyle} mb-4`}>
      <div >
        <p className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Total Pokemon: {totalPokemon}</p>
      </div>

      <div >
        <p className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Page: {actualPage}</p> 
      </div>

      <div className={classes.selectContainer}>
        <p className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Go to page:</p>
        <select className={`${classes.familyPokemon} ${classes.selectStyle}`} onChange={(e) => goToPage(e)}>
          {Array.from(Array(totalOfpage).keys()).map((page, i) => {
            return (
              <option key={i} value={page + 1}>
                {page + 1}
              </option>
            )
          })}
        </select>
      </div>

      <div >
        {prevPage && <button className={classes.buttonStyle} data-type="prev" onClick={handlerURL}>Prev</button>}
        {nextPage && <button className={classes.buttonStyle} data-type="next" onClick={handlerURL}>Next</button>}
      </div>
    </div>
  );
};

export default Pagination;
