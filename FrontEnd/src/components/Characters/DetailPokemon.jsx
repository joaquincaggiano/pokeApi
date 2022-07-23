// React
import { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./DetailPokemon.module.css";

const DetailPokemon = (props) => {
  const ctx = useContext(PokemonContext);

  return (
    <>
      {ctx.dataPokemon.map((pokemon, i) => {
        return (
          <div key={i}>
            <div className={classes.backdrop} />
            <div className={`card ${classes.modal}`}>
              <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <button onClick={props.onCloseModal}>Close</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailPokemon;
