// React Hooks
import { useEffect, useState } from "react";

// Hook de redux
import { useSelector, useDispatch } from "react-redux";

// Functions de redux slice
import {
  removePokeFromFav,
  initialStateFunction,
} from "../../features/favPokeSlice/favPokeSlice";

// Axios
import axios from "axios";

//Components
import EachFavPokemon from "./EachFavPokemon";

function CaughtPokemons() {
  // Dispatch redux
  const dispatch = useDispatch();

  // Redux state
  const { pokemonFavList } = useSelector((state) => state.pokeFav);
  console.log("PokemonfavList", pokemonFavList);

    const pokeFavs = pokemonFavList.map(onePoke => onePoke)
  // const [totalPokemons, setTotalPokemons] = useState([]);
  console.log("POKE FAVSSSS", pokeFavs)

  // User ID
  const userId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/user/${userId.id}/favs`)
      .then((response) => {
        // console.log("totalPokemons", response.data);
        dispatch(initialStateFunction(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>CaughtPokemons</h1>
      {pokeFavs.map((onePoke, i) =>{
       return <EachFavPokemon 
        key={i}
        pokemonId={onePoke[0].pokefavorites_users.pokemonId}/>
      })}
      {/* <EachFavPokemon 
    pokemonId={pokemonFavList[0][0].pokefavorites_users.pokemonId}/> */}
      {/* {pokemonFavList.map((onePokemon) => {
        return onePokemon
      }).map((pokeFav, i) => {
        <EachFavPokemon
          key={i}
          pokemonId={pokeFav[0].pokefavorites_users.pokemonId}
        />;
      })} */}
    </div>
  );
}

export default CaughtPokemons;
