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
  const [actualPage, setActualPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState({})

  // const URL ="https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

  // Handler
  const handlerURL = (e) => {
    const type = e.target.dataset.type;

    if (type === "next") {
      setIsLoading(true)
      setActualURL(nextPage);
      setActualPage(actualPage + 1);
    }
    if (type === "prev") {
      setIsLoading(true)
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
          setIsLoading(false)
          if(response.data.next === "https://pokeapi.co/api/v2/pokemon?offset=900&limit=20") {
            setNextPage(null)
          } else {
            setNextPage(response.data.next);
          }         
          setPrevPage(response.data.previous);
          // setTotalPokemon(920);
          setTotalPokemon(900);
        }

        const pokemonArray = response.data.results;
        if (pokemonArray) {
          pokemonArray.forEach(async (pokemon) => {
            await Axios.get(pokemon.url).then((result) => {
              // console.log("RESULT", result.data);
              const nameWithUppercase =
                result.data.name[0].toUpperCase() + result.data.name.slice(1);
              if (result.status === 200) {
                const typePokemon = result.data.types.map(
                  (oneType) => oneType.type.name
                );
                // console.log("TYPES", typePokemon)
                allPokemonArray.push(result.data);
  
                eachPokemon.push({
                  id: result.data.id,
                  name: nameWithUppercase,
                  image: result.data.sprites.other.home.front_default,
                  // image: result.data.sprites.other.dream_world.front_default,
                  // image: result.data.sprites.front_default,
                  type: typePokemon,
                });
              }
              if (eachPokemon.length >= 20) {
                eachPokemon.sort((a, b) => a.id - b.id);
                setDataPokemon(eachPokemon);
                setIsLoading(false);
                setLoadingSearch(true)
              }
            });
          });
          setAllPokemones(allPokemonArray);
        } else {
          setLoadingSearch(true)
          console.log("POKEMON SEARCH", response.data)
          const pokemonNameUppercase = response.data.name[0].toUpperCase() + response.data.name.slice(1);
          const typePokemon = response.data.types;
          const pokemonNumberId = String(response.data.id).padStart(3, 0);
          const pokemonMoves = response.data.moves;
          const pokemonImage = response.data.sprites.other.home.front_default;
          const pokemonStats = response.data.stats;
          const height = response.data.height;
          const weight = response.data.weight;
          const abilities = response.data.abilities;
          setPokemonSearch({
            id: pokemonNumberId,
            name: pokemonNameUppercase,
            types: typePokemon,
            moves: pokemonMoves,
            image: pokemonImage,
            stats: pokemonStats,
            height: height,
            weight: weight,
            abilities: abilities   
          })
          // navigate(`/search/${pokemonSearch.id || pokemonSearch.name}`)
          setLoadingSearch(false)
          // setIsLoading(true);
        }
      });
    };
    const dataArray = data();
  }, [actualURL]);
  // console.log("ACTUAL URL", actualURL )
  // console.log("STATE", dataPokemon);
  // console.log("next page", nextPage);
  // console.log("prev page", prevPage);

  const goToPage = (e) => {
    const type = e.target.dataset.type;
    let numberGoTo = Number(e.target.value)
    const pageNumber = numberGoTo * 20;
    // setPageNumber(numberGoTo * 20);
    if(type === "goTo") {
      setActualPage(numberGoTo)
    }
    setActualURL(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=20`)
  };

  const totalOfpage = Math.ceil(totalPokemon / 20);

  const valueProvider = {
    dataPokemon,
    isLoading,
    loadingSearch,
    allPokemones,
    handlerURL,
    prevPage,
    nextPage,
    totalPokemon,
    totalOfpage,
    actualPage,
    goToPage,
    setActualURL,
    pokemonSearch
  };

  return (
    <PokemonContext.Provider value={valueProvider}>
      {children}
    </PokemonContext.Provider>
  );
};
