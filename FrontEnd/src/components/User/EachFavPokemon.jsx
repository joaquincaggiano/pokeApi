// Hooks
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Css
import classes from "./CaughAndEachFav.module.css";

// router
import { Link } from "react-router-dom";

function EachFavPokemon({ pokemonId }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) =>
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
        })
      );
  }, []);

  return (
    <div className="row p-1">
      {pokemon && (
        <div
          className={`${classes.cardFavPokemon} col-xs-1 col-sm-6 col-md-4 col-lg-3`}
        >
          <img src={pokemon.image} />
          <div className={classes.descriptionCard}>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>N.º {String(pokemon.id).padStart(3, 0)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EachFavPokemon;
