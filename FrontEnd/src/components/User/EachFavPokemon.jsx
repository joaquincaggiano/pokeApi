import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";


function EachFavPokemon({ pokemonId }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) =>
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
        })
      );
  }, []);

  return (
    <>
    {pokemon && 
    <Card>
      <h1>{pokemon.name}</h1>
      <p>Pokemon Nº{String(pokemon.id).padStart(3, 0)}</p>
      <img src={pokemon.image}/>
    </Card>
    }
    </>
  );
}

export default EachFavPokemon;
