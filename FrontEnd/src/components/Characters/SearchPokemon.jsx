// Hook
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const { pokemonSearch } = useContext(PokemonContext);

  //   if (pokemonSearch.types.length > 1) {
  //     const classType =
  //   }

  return (
    <div className="row p-4">
      <div className="col-1">
        <div className={classes.cardStyle}>
            <h1>{pokemonSearch.name} - <span>Nº {pokemonSearch.id}</span></h1>
            <div className={classes.rowOne}>
                <img src={pokemonSearch.image} alt={pokemonSearch.name} />
                <hr />
                <h2>Characteristics</h2>
                <div className={classes.pokemonFeatures}>
                    <li>Height: <b>{pokemonSearch.height}</b></li>
                    <li>Weight: <b>{pokemonSearch.weight}</b></li>
                    <li>Abilities: {pokemonSearch.abilities.map((ability, i) => {
                        return <b key={i}>{ability.ability.name} / </b>
                    })}</li>
                </div>
            </div>
            <div className={classes.rowTwo}>
                <h2>Stats points</h2>
                <div className={classes.stats}>
                    {pokemonSearch.stats.map((stat, i) => {
                        return (
                            <li key={i}>{stat.stat.name [0].toUpperCase() + stat.stat.name.slice(1)}: <b>{stat.base_stat}</b></li>
                        )
                    })}
                </div>
                <h2>Types</h2>
                <div className={classes.pokemonType}>
                    {pokemonSearch.types.map((type, i) => {
                        return <p key={i}>{type.type.name}</p>
                    })}
                </div>
            </div>
            <div className={classes.rowThree}>
                <h2>Moves</h2>
                {pokemonSearch.moves.map((move, i) => {
                    return (
                        <h4 key={i}>{move.move.name[0].toUpperCase() + move.move.name.slice(1)}</h4>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPokemon;
