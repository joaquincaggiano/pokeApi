// Hook
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./SearchPokemon.module.css";

const SearchPokemon = () => {
  const { pokemonSearch, loadingSearch } = useContext(PokemonContext);

  const classType = pokemonSearch?.types?.map((type, i) => {
    const typeUppercase =
      type.type.name[0].toUpperCase() + type.type.name.slice(1);
    const typeNameClass = `type${typeUppercase}`;
    const classType = classes[typeNameClass];
    return (
      <div className={classType} key={i}>
        <p>{type.type.name}</p>
      </div>
    );
  });

  console.log("POKEMON SEARCH", pokemonSearch)

  return (
    <>
      {/* {!loadingSearch && pokemonSearch === null ? (
        <h1 className="text-white text-center">POKEMON NOT FOUND</h1>
      ) : ("")} */}
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
