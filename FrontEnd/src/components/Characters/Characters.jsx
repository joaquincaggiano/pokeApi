// React
import { useContext, useState, useRef, useEffect } from "react";

// Router
import { useNavigate } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";
import EachCharacter from "./EachCharacter";
import Pagination from "../layout/Pagination";
import SearchPokemon from "./SearchPokemon";
import ModalQuestion from "./ModalQuestion";
// Css
import classes from "./Characters.module.css";

const Characters = () => {
  const navigate = useNavigate();

  const { isLoading, dataPokemon, loadingSearch } = useContext(PokemonContext);

  const { pokemonFavList } = useSelector((state) => state.pokeFav);

  const [showModal, setShowModal] = useState(false);
  const [pokemonId, setPokemonId] = useState(null);
  const [openTrivia, setOpenTrivia] = useState(false);

  // const modalPositionRef = useRef();

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const closeTrivia = () => {
    navigate('/user/caught-pokemons')
    setOpenTrivia(false);
  };

  // useEffect(() => {
  //   if (modalPositionRef != undefined) {
  //     modalPositionRef?.current?.scrollIntoView({ behaviour: "smooth" });
  //   }
  // }, [showModal]);

  
  useEffect(()=>{
    // window.location.reload()
  },[])

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
                    setOpenTrivia={setOpenTrivia}
                    pokeFavClass={pokemonFavList.some(poke => { 
                    return poke.pokemon == pokemon.id})}
                  />
                );
              })}
            </div>
            {showModal && (
              <DetailPokemon
                // ref={modalPositionRef}
                pokemonId={pokemonId}
                onCloseModal={closeModalHandler}
              />
            )}

            {/* {!loadingSearch && <SearchPokemon />} */}
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
