// React
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

const Characters = () => {
  const ctx = useContext(PokemonContext);
  return (
    <div className="row">
      {ctx.dataPokemon.map((pokemon) => {
        return (
          <div className="col-3" key={pokemon.id}>
            <div className="card">
              <img
                src={pokemon.image}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <a href="#" className="btn btn-primary">
                  Ver Pokemon
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
