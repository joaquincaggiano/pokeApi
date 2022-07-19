// React
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

const Characters = () => {
  const ctx = useContext(PokemonContext);
  return (
    <div className="row">
        {ctx.pokemones.map((pokemon, i) => {
            return(
            <div className="col-3" key={i + pokemon.name}>
            <div className="card">
              <img src={ctx.pokemonImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <a href={pokemon.url} className="btn btn-primary">
                  Ver Pokemon
                </a>
              </div>
            </div>
          </div>
            )
        })}
    </div>
  );
};

export default Characters;
