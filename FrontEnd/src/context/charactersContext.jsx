// React
import { createContext, useEffect, useState } from "react";

// Axios
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({children}) => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonCount, setPokemonCount] =useState([])
    const [pokemonImage, setPokemonImage] = useState(null);

    const allPokemones = Array.from(Array(pokemonCount).keys()).map((pokemon) => {
        return pokemon + 1;
    })
    // console.log("ALLPOKEMONES",allPokemones)

    useEffect(() => {
        Axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((response) => {
                if(response.status === 200) {
                    console.log("TODOS LOS POKEMONES",response.data)
                    setPokemones(response.data.results);
                    setPokemonCount(response.data.count)
                }
            })
    }, [])

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${allPokemones}`)
            .then((response) => {
                if(response.status === 200) {
                    console.log("UN POKEMON", response.data);
                    setPokemonImage(response.data.sprites.front_default)
                }
            })
    }, [])

    const valueProvider = {
        pokemones,
        pokemonImage,
    }
    return (
        <PokemonContext.Provider value={valueProvider}>
            {children}
        </PokemonContext.Provider>
    )
}
