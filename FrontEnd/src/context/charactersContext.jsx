// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  
  const URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    let eachPokemon = [];
    const data = async () => {
      await Axios.get(URL).then((response) => {
        // console.log(response.data.results)
        const pokemonArray = response.data.results
        pokemonArray.forEach(async (pokemon) => {
          const infoPokemon = await Axios.get(pokemon.url)
            .then(result => {
              // console.log("RESULT", result.data);
              eachPokemon.push({
                id: result.data.id,
                name: result.data.name,
                image: result.data.sprites.front_default
              })
            })
        });
        console.log("EACH POKEMON", eachPokemon)
      });
    };
    const dataArray = data()
    setDataPokemon(eachPokemon); // hacer un loading para conditional rendering si dale
  }, []);
  console.log("STATE",dataPokemon)
  



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
  };
  
  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
