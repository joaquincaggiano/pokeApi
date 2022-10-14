// React
import { useContext, useState } from "react";

//Redux
import { useSelector } from "react-redux";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";
import EachCharacter from "./EachCharacter";
import Pagination from "../layout/Pagination";
import ModalQuestion from "./ModalQuestion";
// Css
import classes from "./Characters.module.css";

const Characters = () => {

  const { isLoading, dataPokemon} = useContext(PokemonContext);

  const { pokemonFavList } = useSelector((state) => state.pokeFav);

  const [showModal, setShowModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(null);
  const [openTrivia, setOpenTrivia] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const closeTrivia = () => {
    setOpenTrivia(false);
  };

  return (
    <>
      <Pagination />
      {!isLoading && (
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
                    setOpenTrivia={setOpenTrivia}
                    pokeFavClass={pokemonFavList.some(poke => { 
                    return poke.pokemon == pokemon.id})}
                  />
                );
              })}
            </div>
            {showModal && (
              <DetailPokemon
                pokemonId={pokemonId}
                onCloseModal={closeModalHandler}
              />
            )}
          </div>

          {openTrivia && (
            <ModalQuestion
              setOpenTrivia={setOpenTrivia}
              onCloseModal={closeTrivia}
              pokemonId={pokemonId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Characters;
