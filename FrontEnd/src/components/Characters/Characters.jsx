// React
import { useContext, useState, useRef, useEffect } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";
import EachCharacter from "./EachCharacter";
import Pagination from "../layout/Pagination";
import SearchPokemon from "./SearchPokemon";

// Css
import classes from "./Characters.module.css";

const Characters = () => {
  const { isLoading, dataPokemon, loadingSearch } = useContext(PokemonContext);

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
    <>
      <Pagination />
      {loadingSearch && !isLoading && (
        <div className="container">
          <div className={classes.pokeFondo}>
            <div className="row p-4">
              {dataPokemon.map((pokemon, i) => {
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
            {showModal && (
              <DetailPokemon
                ref={modalPositionRef}
                pokemonId={pokemonId}
                onCloseModal={CloseModalHandler}
              />
            )}

            {/* {!loadingSearch && <SearchPokemon />} */}
          </div>
        </div>
      )}
      {!loadingSearch && isLoading && (
        <div className="container">
          <div className={`${classes.pokeFondo} p-4`}>
            <SearchPokemon />
          </div>
        </div>
      )}
    </>
  );
};

export default Characters;
