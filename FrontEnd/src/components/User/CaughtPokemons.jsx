// React Hooks
import { useEffect, useState } from "react";

// Hook de redux
import { useSelector, useDispatch } from "react-redux";

// Functions de redux slice
import { removePokeFromFav } from "../../features/favPokeSlice/favPokeSlice";

// Axios
import axios from "axios";

function CaughtPokemons() {
  // Dispatch redux
  const dispatch = useDispatch();

  // Redux state
  const { pokemonFavList } = useSelector((state) => state.pokeFav);

  const [totalPokemons, setTotalPokemons] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=900&offset=0")
      .then((response) => {
        console.log("totalPokemons", response);
        setTotalPokemons(response)
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>CaughtPokemons</div>;
}

export default CaughtPokemons;
