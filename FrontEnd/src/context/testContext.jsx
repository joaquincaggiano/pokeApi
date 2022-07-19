// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);

  const URL = "https://pokeapi.co/api/v2/pokemon"
useEffect(()=>{
    const data = async ()=>{
        const pokemonsFetch = await Axios.get(URL)
        .then(response => response.data.results)
        .catch(console.error)
    }
    
})

  useEffect(() => {
    try {
      (async () => {
        const pokemonsFetch = await Axios.get(
          "https://pokeapi.co/api/v2/pokemon"
        );
        const pokemons = pokemonsFetch.data.results;

        pokemons.forEach(async (pokemon) => {
          let info = await Axios(pokemon.url);
          setDataPokemon((prevState) => {
            return [
              ...prevState,
              {
                id: info.data.id,
                name: info.data.name,
                image: info.data.sprites.front_default,
              },
            ];
          });
        });
      })();
    } catch {
      (error) => console.log(`Se produjo el siguiente error: ${error}`);
    }
  }, []);
  const sortedPokemons = dataPokemon.sort((a, b) => {
    return a.id < b.id
  })
  console.log("SORTEDPOKEMON", sortedPokemons)

  const valueProvider = {
    sortedPokemons,
  };
  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
