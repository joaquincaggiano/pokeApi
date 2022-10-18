// React Hooks
import { useEffect, useState } from "react";

// Hook de redux
import { useSelector, useDispatch } from "react-redux";

// Functions de redux slice
import {
  initialStateFunction,
} from "../../features/favPokeSlice/favPokeSlice";

// Axios
import axios from "axios";

// Css
import classes from "./CaughAndEachFav.module.css";

//Components
import EachFavPokemon from "./EachFavPokemon";

function CaughtPokemons() {
  // Dispatch redux
  const dispatch = useDispatch();

  // Redux state
  const { pokemonFavList, totalPokemonFav } = useSelector((state) => state.pokeFav);
  // console.log("PokemonfavList", pokemonFavList);

  const pokeFavs = pokemonFavList.map((onePoke) => onePoke);
  // console.log("POKE FAVSSSS", pokeFavs);

   // User ID
  const userId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/user/${userId.id}/favs`)
      .then((response) => {
        dispatch(initialStateFunction(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  // Show pokemons
  const [showPokemonFavs, setShowPokemonFavs] = useState(false);

  const showPokemonHandler = () => {
    setShowPokemonFavs(!showPokemonFavs);
  }

  return (
    <div>
      <h1 className={classes.caughtPokemonTitle}>My Pokemon Team</h1>
      <div className={classes.pokebola} onClick={showPokemonHandler}>
        <div className={classes.detailPokebola}></div>
      </div>
      <h3 className={classes.amountPokeball}>Amount inside pokeball: {totalPokemonFav}</h3>
      {showPokemonFavs && (
        <div className={`${classes.cardsContainer} container`}>
          {pokeFavs.map((onePoke, i) => {
            return <EachFavPokemon key={i} pokemonId={onePoke.pokemon} pokeFavoriteId={onePoke.id}/>;
          })}
        </div>
      )}
    </div>
  );
}

export default CaughtPokemons;
