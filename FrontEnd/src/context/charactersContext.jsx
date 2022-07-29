// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  // URL
  const URL = "https://pokeapi.co/api/v2/pokemon";

  // useState
  const [dataPokemon, setDataPokemon] = useState([]);
  const [allPokemones, setAllPokemones] = useState([]);
  const [actualURL, setActualURL] = useState(URL);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // const URL ="https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

  // Handler
  const handlerURL = (e) => {
    const type = e.target.dataset.type;

    if (type === "next") {
      setActualURL(nextPage);
      setActualPage(actualPage + 1);
    }
    if (type === "prev") {
      setActualURL(prevPage);
      setActualPage(actualPage - 1);
    }
  };

  useEffect(() => {
    let eachPokemon = [];
    let allPokemonArray = [];
    const data = async () => {
      await Axios.get(actualURL).then((response) => {
        // console.log("TODA LA DATA", response.data);
        if (response.status === 200) {
          setNextPage(response.data.next);
          setPrevPage(response.data.previous);
          setTotalPokemon(response.data.count);
        }

        const pokemonArray = response.data.results;
        pokemonArray.forEach(async (pokemon) => {
          await Axios.get(pokemon.url).then((result) => {
            // console.log("RESULT", result.data);
            const nameWithUppercase =
              result.data.name[0].toUpperCase() + result.data.name.slice(1);
            if (result.status === 200) {
              allPokemonArray.push(result.data);

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
        setAllPokemones(allPokemonArray);
      });
    };
    const dataArray = data();
  }, [actualURL]);
  // console.log("STATE", dataPokemon);
  // console.log("next page", nextPage);
  // console.log("prev page", prevPage);

  const goToPage = (e) => {
    const numberGoTo = Number(e.target.value)
    // console.log("numberGoTo", numberGoTo)
    const pageNumber = numberGoTo * 20;
    setActualURL(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=20`)
  };

  const totalOfpage = Math.ceil(totalPokemon / 20)

  const valueProvider = {
    dataPokemon,
    isLoading,
    allPokemones,
    handlerURL,
    totalPokemon,
    prevPage,
    nextPage,
    actualPage,
    goToPage,
    totalOfpage
  };

  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
