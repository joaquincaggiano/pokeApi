// React
import React, { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./DetailPokemon.module.css";

const DetailPokemon = React.forwardRef((props, ref) => {
  const ctx = useContext(PokemonContext);

  console.log("ALL POKEMONES", ctx.allPokemones);

  const onePokemon = ctx.allPokemones.find((pokemon) => {
    return pokemon.id === props.pokemonId;
  });
  // console.log("ONE POKEMON",onePokemon)
  const pokemonType = onePokemon.types;
  const pokemonMoves = onePokemon.moves;
  console.log("pokemonType", pokemonType);
  return (
    <>
      <div className={classes.backdrop} onClick={props.onCloseModal} />
      <div ref={ref} className={`card ${classes.modal}`}>
        <img
          src={onePokemon.sprites.other.dream_world.front_default}
          className="card-img-top"
          alt={onePokemon.name}
          style={{ width: "25rem", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{onePokemon.name}</h5>
        </div>
        <h5>HP: {onePokemon.stats[0].base_stat}</h5>
        <h3>Type:</h3>
        <ul className="list-group list-group-flush">
          {pokemonType.map((oneType, i) => {
            return <li key={i} className="list-group-item">{oneType.type.name}</li>;
          })}
        </ul>
        <h3>Moves:</h3>
        <div className='overflow-scroll' style={{maxHeight: '8rem'}}>
        <ul className="list-group list-group-flush ">
          {pokemonMoves.map((oneMove, i) => {
            return <li key={i} className="list-group-item">{oneMove.move.name}</li>;
          })}
        </ul>
        </div>
        <div className="card-body">
          <button onClick={props.onCloseModal}>Close</button>
        </div>
      </div>
    </>
  );
});

export default DetailPokemon;
