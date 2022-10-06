// Hook de redux
import { useDispatch } from "react-redux";

// Hooks
import { useEffect, useState, useContext } from "react";

// Function redux
import { removePokeFromFav } from "../../features/favPokeSlice/favPokeSlice";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Axios
import axios from "axios";

// Css
import classes from "./CaughAndEachFav.module.css";

// router
import { Link, useNavigate } from "react-router-dom";

function EachFavPokemon({ pokemonId, pokeFavoriteId }) {
  // Dispatch redux
  const dispatch = useDispatch();

  // Navigate
  const navigate = useNavigate();

  // Context
  const { setActualURL } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
        });
      });
  }, []);

  const showDetailPokemonHandler = () => {
    setActualURL(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  };

  const deletePokeFav = () => {
    const userOwnPokeToDelete = JSON.parse(localStorage.getItem("user"));
    axios
      .delete(
        `http://localhost:3030/api/user/${userOwnPokeToDelete.id}/favs/${pokeFavoriteId}`
      )
      .then((response) => console.log("RELEASE POKEMON", response))
      .catch((error) => console.log(error));

    dispatch(removePokeFromFav(pokemonId));

    navigate("/user/profile");
  };

  return (
    <div className="row p-1">
      {pokemon && (
        <div
          className={`${classes.cardFavPokemon} col-xs-1 col-sm-6 col-md-4 col-lg-3`}
        >
          <Link to={`/characters/${pokemon.name}`}>
            <img onClick={showDetailPokemonHandler} src={pokemon.image} />
          </Link>
          <div className={classes.descriptionCard}>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>N.º {String(pokemon.id).padStart(3, 0)}</p>
          </div>
          <button onClick={deletePokeFav} className={classes.buttonRelease}>
            Release Pokemon
          </button>
        </div>
      )}
    </div>
  );
}

export default EachFavPokemon;
