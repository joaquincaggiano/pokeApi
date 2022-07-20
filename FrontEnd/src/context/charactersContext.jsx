// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    let eachPokemon = [];
    const data = async () => {
      await Axios.get(URL).then((response) => {
        // console.log(response.data.results)
        const pokemonArray = response.data.results;
        pokemonArray.forEach(async (pokemon) => {
          await Axios.get(pokemon.url).then((result) => {
            // console.log("RESULT", result.data);
            if (result.status === 200) {
              eachPokemon.push({
                id: result.data.id,
                name: result.data.name,
                image: result.data.sprites.other.home.front_default
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
      });
    };
    const dataArray = data();
  }, []);
  console.log("STATE", dataPokemon);

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const pokemonsFetch = await Axios.get(
  //         "https://pokeapi.co/api/v2/pokemon"
  //       );
  //       const pokemons = pokemonsFetch.data.results;

  //       pokemons.forEach(async (pokemon) => {
  //         let info = await Axios(pokemon.url);
  //         setDataPokemon((prevState) => {
  //           return [
  //             ...prevState,
  //             {
  //               id: info.data.id,
  //               name: info.data.name,
  //               image: info.data.sprites.front_default,
  //             },
  //           ];
  //         });
  //       });
  //     })();
  //   } catch {
  //     (error) => console.log(`Se produjo el siguiente error: ${error}`);
  //   }
  // }, []);
  // const sortedPokemons = dataPokemon.sort((a, b) => {
  //   return a.id < b.id;
  // });
  // console.log("SORTEDPOKEMON", sortedPokemons);

  const valueProvider = {
    dataPokemon,
    isLoading,
  };

  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
