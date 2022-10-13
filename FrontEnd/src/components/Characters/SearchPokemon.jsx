// Hook
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const { pokemonSearch, loadingSearch } = useContext(PokemonContext);

  const classType = pokemonSearch?.types?.map((type, i) => {
    if (type.type.name === "poison") {
      return (
        <div className={classes.typePoison} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "grass") {
      return (
        <div className={classes.typeGrass} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "fire") {
      return (
        <div className={classes.typeFire} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "water") {
      return (
        <div className={classes.typeWater} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "flying") {
      return (
        <div className={classes.typeFlying} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "electric") {
      return (
        <div className={classes.typeElectric} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }

    if (type.type.name === "bug") {
      return (
        <div className={classes.typeBug} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "normal") {
      return (
        <div className={classes.typeNormal} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "ground") {
      return (
        <div className={classes.typeGround} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "fairy") {
      return (
        <div className={classes.typeFairy} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "fighting") {
      return (
        <div className={classes.typeFighting} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "psychic") {
      return (
        <div className={classes.typePsychic} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "rock") {
      return (
        <div className={classes.typeRock} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "steel") {
      return (
        <div className={classes.typeSteel} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "ice") {
      return (
        <div className={classes.typeIce} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "ghost") {
      return (
        <div className={classes.typeGhost} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "dragon") {
      return (
        <div className={classes.typeDragon} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
    if (type.type.name === "dark") {
      return (
        <div className={classes.typeDark} key={i}>
          <p>{type.type.name}</p>
        </div>
      );
    }
  });

  return (
    <>
      {!loadingSearch && (
        <div className="container">
          <div className={`${classes.pokeFondo} p-4`}>
            <div className={classes.cardStyle}>
              <h1>
                {pokemonSearch.name} - <span>Nº {pokemonSearch.id}</span>
              </h1>
              <img
                className={classes.imgStyle}
                src={pokemonSearch.image}
                alt={pokemonSearch.name}
              />
              <hr />
              <div className={classes.rowOne}>
                <div className={classes.pokemonInfoBoxes}>
                  <h2 className={classes.titlesStyles}>Characteristics</h2>
                  <div className={classes.pokemonFeatures}>
                    <li>
                      Height: <b>{pokemonSearch.height}</b>
                    </li>
                    <li>
                      Weight: <b>{pokemonSearch.weight}</b>
                    </li>
                    <li>
                      Abilities:{" "}
                      {pokemonSearch.abilities.map((ability, i) => {
                        return <b key={i}>{ability.ability.name} / </b>;
                      })}
                    </li>
                  </div>
                </div>

                <div className={classes.pokemonInfoBoxes}>
                  <h2 className={classes.titlesStyles}>Types</h2>
                  <div className={classes.pokemonType}>{classType}</div>
                </div>
              </div>

              <div className={classes.rowTwo}>
                <div className={classes.pokemonInfoBoxes}>
                  <h2 className={classes.titlesStyles}>Stats points</h2>

                  <div className={classes.stats}>
                    {pokemonSearch.stats.map((stat, i) => {
                      return (
                        <div key={i} className={classes.barStat}>
                          <div className={classes.barLabel}>
                            {stat.stat.name[0].toUpperCase() +
                              stat.stat.name.slice(1)}{" "}
                            - {stat.base_stat}
                          </div>
                          <div className={classes.barInner}>
                            <div
                              className={classes.barFill}
                              style={{ width: `${stat.base_stat}px` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={classes.pokemonInfoBoxes}>
                  <h2 className={classes.titlesStyles}>Moves</h2>
                  <div className={classes.pokemonMoves}>
                    {pokemonSearch.moves.map((move, i) => {
                      return (
                        <h4 key={i}>
                          {move.move.name[0].toUpperCase() +
                            move.move.name.slice(1)}
                        </h4>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPokemon;
