// Hook
import { useRef } from "react";

// Css
import classes from "./EachCharacter.module.css";

function EachCharacter(props) {
  const viewPokemonButtonRef = useRef();

  const showModalHandler = (e) => {
    //   console.log(e.target)
    props.setPokemonId(props.id);
    props.setShowModal(true);
  };

  const pokemonNumber = String(props.id);

  // console.log("pokemonNumber",  pokemonNumber.padStart(4, 0))

  // CSS para cada TYPE
  const classType = props.typePokemon.map((type, i) => {
    if(type === "poison") {
      return <div className={classes.typePoison} key={i}><p>{type}</p></div>
    } else if (type === "grass") {
      return <div className={classes.typeGrass} key={i}><p>{type}</p></div>
    } else if (type === "fire") {
      return <div className={classes.typeFire} key={i}><p>{type}</p></div>
    } else if (type === "water") {
      return <div className={classes.typeWater} key={i}><p>{type}</p></div>
    } else if (type === "flying") {
      return <div className={classes.typeFlying} key={i}><p>{type}</p></div>
    } else if (type === "electric") {
      return <div className={classes.typeElectric} key={i}><p>{type}</p></div>
    } else {
      return <div className={classes.typeOthers} key={i}><p>{type}</p></div>
    }
  })

  return (
    <div className="col-3 d-flex justify-content-evenly my-3" key={props.id}>
      <div className={`card ${classes.cardStyle}`}>
        <div className={classes.imgStyle}>
          <img src={props.image} className="card-img-top" alt={props.name} />
          <p className="text-secondary fw-bold">
            Nº {pokemonNumber.padStart(4, 0)}
          </p>
        </div>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>

          <div className={classes.typeStyle}>
            {classType}
          </div>

          {/* <div className={classes.typeStyle}>
            {props.typePokemon.map((type, i) => (
              <p key={i}>{type}</p>
            ))}
          </div> */}

          <button className={classes.buttonStyle} onClick={showModalHandler}>Ver Pokemon</button>
        </div>
      </div>
    </div>
    // <div className={classes.container__cards}>
    //   <div className={classes.card}>
    //     <div className={classes.cover__card}>
    //       <img src={props.image} alt={props.name} />
    //     </div>
    //     <h5>{props.name} - Nº {pokemonNumber.padStart(4, 0)}</h5>
    //     <button onClick={showModalHandler}>Ver Pokemon</button>
    //   </div>
    // </div>
  );
}

export default EachCharacter;
