// React
import { useContext, useState } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Component
import DetailPokemon from "./DetailPokemon";

const Characters = () => {
  const ctx = useContext(PokemonContext);

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true)
  }

  const CloseModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      {!ctx.isLoading && (
        <div className="row">
          {ctx.dataPokemon.map((pokemon, i) => {
            return (
              <div className="col-3" key={pokemon.id}>
                <div className="card">
                  <img
                    src={pokemon.image}
                    className="card-img-top"
                    alt={pokemon.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    {/* <a
                      href={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
                      className="btn btn-primary"
                    >
                      Ver Pokemon
                    </a> */}
                    <button onClick={showModalHandler}>Ver Pokemon</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showModal && <DetailPokemon onCloseModal={CloseModalHandler}/>}
    </>
  );
};

export default Characters;
