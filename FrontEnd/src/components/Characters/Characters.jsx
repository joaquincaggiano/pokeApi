// React
import { useContext, useState, useRef, useEffect } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";
import EachCharacter from "./EachCharacter";

// Css
import classes from "./Characters.module.css";

const Characters = () => {
  const ctx = useContext(PokemonContext);

  const [showModal, setShowModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(null);

  const modalPositionRef = useRef();

  const CloseModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (modalPositionRef != undefined) {
      modalPositionRef?.current?.scrollIntoView({ behaviour: "smooth" });
    }
  }, [showModal]);

  return (
    <div className="container">
      <div className={classes.pokeFondo}>
        {!ctx.isLoading && (
          <div className="row">
            {ctx.dataPokemon.map((pokemon, i) => {
              return (
                <EachCharacter
                  key={i}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  typePokemon={pokemon.type}
                  setShowModal={setShowModal}
                  setPokemonId={setPokemonId}
                />
              );
            })}
          </div>
        )}

        {showModal && (
          <DetailPokemon
            ref={modalPositionRef}
            pokemonId={pokemonId}
            onCloseModal={CloseModalHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Characters;
