// React
import { useContext, useState, useRef, useEffect } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";
import EachCharacter from "./EachCharacter";

const Characters = () => {
  const ctx = useContext(PokemonContext);

  const [showModal, setShowModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(null);

  const modalPositionRef = useRef()

  const CloseModalHandler = () => {
    setShowModal(false);
  };

  useEffect(()=>{
    if (modalPositionRef != undefined) {
      modalPositionRef?.current?.scrollIntoView({behaviour: 'smooth'})
    }
  }, [showModal])

  return (
    <>
      {!ctx.isLoading && (
        <div className="row">
          {ctx.dataPokemon.map((pokemon, i) => {
            return (
              <EachCharacter
                key={i}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                setShowModal={setShowModal}
                setPokemonId={setPokemonId}
              />
            );
          })}
        </div>
      )}

      {showModal && <DetailPokemon ref={modalPositionRef} pokemonId={pokemonId} onCloseModal={CloseModalHandler} />}
    </>
  );
};

export default Characters;
