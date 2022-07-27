// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [allPokemones, setAllPokemones] = useState([])
  const [actualURL, setActualURL] =useState("")
  const [isLoading, setIsLoading] = useState(true);

  // const URL = "https://pokeapi.co/api/v2/pokemon";
  const URL ="https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

  // const handlerURL = (url) => {
  //   setActualURL(url)
  // }

  useEffect(() => {
    let eachPokemon = [];
    let allPokemonArray = [];
    const data = async () => {
      await Axios.get(URL || actualURL).then((response) => {
        console.log("TODA LA DATA", response.data);
        const pokemonArray = response.data.results;
        pokemonArray.forEach(async (pokemon) => {
          await Axios.get(pokemon.url).then((result) => {
            // console.log("RESULT", result.data);
            const nameWithUppercase = result.data.name[0].toUpperCase() + result.data.name.slice(1)
            if (result.status === 200) {
              allPokemonArray.push(result.data)

              eachPokemon.push({
                id: result.data.id,
                name: nameWithUppercase,
                image: result.data.sprites.other.home.front_default,
                // image: result.data.sprites.other.dream_world.front_default
                // image: result.data.sprites.front_default,
              });
            }
            if (eachPokemon.length >= 20) {
              eachPokemon.sort((a, b) => a.id - b.id);
              setDataPokemon(eachPokemon); // hacer un loading para conditional rendering
              setIsLoading(false);
            }
          });
        });
        setAllPokemones(allPokemonArray)
      });
    };
    const dataArray = data();
  }, []);
  // console.log("STATE", dataPokemon);

  const valueProvider = {
    dataPokemon,
    isLoading,
    allPokemones
  };

  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
