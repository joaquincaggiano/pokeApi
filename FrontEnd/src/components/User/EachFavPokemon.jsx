import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";


function EachFavPokemon({ pokemonId }) {
  const [pokemon, setPokemon] = useState();

  console.log("EL ID DE PROPS", pokemonId)
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) =>
    //   console.log("Response eachfav",response)
        setPokemon({
          name: response.data.name,
          image: response.data.sprites.other.dream_world.front_default,
          id: response.data.id,
        })
      );
  }, []);

  console.log("EL POKEMON YA SETEADO", pokemon)
  return (
    <>{pokemon && 
    <Card>
        {/* <h1 className="text-danger">ENTRO EL GUACHO</h1> */}
      <h1>{pokemon.name}</h1>
      <p>Pokemon Nº{String(pokemon.id).padStart(3, 0)}</p>
      <img src={pokemon.image}/>
    </Card>
    }
    </>
  );
}

export default EachFavPokemon;
