// Hooks
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

const Pagination = () => {
  const ctx = useContext(PokemonContext);

  return (
    <div className="row p-3 border border-danger border-4 mb-4">
      <div className="col-3 d-flex align-items-center">
        <b>Total de pokemones:</b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Página:</b>
      </div>

      <div className="col-3 d-flex align-items-center">
        <b>Ir a la página:</b>
        <select>
          <option>1</option>
        </select>
      </div>

      <div className="col-3 d-flex align-items-center">
        <button>Next</button>
        <button>Prev</button>
      </div>
    </div>
  );
};

export default Pagination;
