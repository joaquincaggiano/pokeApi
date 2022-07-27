// Hooks
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

const Pagination = () => {
  const ctx = useContext(PokemonContext);

  return (
    <div className="row p-3 border border-danger border-4 mb-4">
      <div className="col-3 d-flex align-items-center">
        <b>Total pokemon:</b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Page:</b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Go to page:</b>
        <select>
          <option>1</option>
        </select>
      </div>

      <div className="col-3 d-flex align-items-center">
        <button data-type="prev" onClick={ctx.handlerURL}>Prev</button>
        <button data-type="next" onClick={ctx.handlerURL}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
