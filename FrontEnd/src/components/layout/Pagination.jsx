// Hooks
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./Pagination.module.css"

const Pagination = () => {
  const {totalPokemon, actualPage, handlerURL, prevPage, nextPage, goToPage, totalOfpage} = useContext(PokemonContext);

  return (
    <div className="row p-3 border border-danger border-4 mb-4">
      <div className="col-3 d-flex align-items-center">
        <b className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Total Pokemon: </b>{totalPokemon}
      </div>

      <div className="col-3 d-flex align-items-center">
        <b className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Page:</b> {actualPage}
      </div>

      <div className="col-3 d-flex align-items-center">
        <b className={`${classes.borderColorPagination} ${classes.familyPokemon}`}>Go to page:</b>
        <select onChange={(e) => goToPage(e)}>
          {Array.from(Array(totalOfpage).keys()).map((page, i) => {
            return (
              <option key={i} value={page + 1}>
                {page + 1}
              </option>
            )
          })}
          {/* <option>1</option> */}
        </select>
      </div>

      <div className="col-3 d-flex align-items-center">
        {prevPage && <button data-type="prev" onClick={handlerURL}>Prev</button>}
        {nextPage && <button data-type="next" onClick={handlerURL}>Next</button>}
      </div>
    </div>
  );
};

export default Pagination;
