// Redux hooks
import { useSelector } from "react-redux";

// React Hook
import { useEffect, useState } from "react";

// Css
import classes from "./EachCharacter.module.css";

function EachCharacter(props) {
  // Redux state
  const { pokemonFavList } = useSelector((state) => state.pokeFav);


  const showModalHandler = (e) => {
    props.setPokemonId(props.id);
    props.setShowModal(true);
  };

  const pokemonNumber = String(props.id);

  const handlePokeFav = () => {
    if(!props.pokeFavClass){
      props.setPokemonId(props.id);
      props.setOpenTrivia(true);
    }else{
      alert('This Pokemon is already in your team!')
    }
  };

  // useEffect(() => {
  //   const foundPoke = pokemonFavList.some((onePokemon) => {
  //     return onePokemon.pokemon === props.id;
  //   });
  //   setFavedPoke(foundPoke);
  //   console.log("found", foundPoke)
  // }, []);
  // console.log('favedpoke', favedPoke)

  console.log('props poke fav', props.pokeFavClass)
  // CSS para cada TYPE
  const classType = props.typePokemon.map((type, i) => {
    if (type === "poison") {
      return (
        <div className={classes.typePoison} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "grass") {
      return (
        <div className={classes.typeGrass} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "fire") {
      return (
        <div className={classes.typeFire} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "water") {
      return (
        <div className={classes.typeWater} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "flying") {
      return (
        <div className={classes.typeFlying} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "electric") {
      return (
        <div className={classes.typeElectric} key={i}>
          <p>{type}</p>
        </div>
      );
    }

    if (type === "bug") {
      return (
        <div className={classes.typeBug} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "normal") {
      return (
        <div className={classes.typeNormal} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "ground") {
      return (
        <div className={classes.typeGround} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "fairy") {
      return (
        <div className={classes.typeFairy} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "fighting") {
      return (
        <div className={classes.typeFighting} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "psychic") {
      return (
        <div className={classes.typePsychic} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "rock") {
      return (
        <div className={classes.typeRock} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "steel") {
      return (
        <div className={classes.typeSteel} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "ice") {
      return (
        <div className={classes.typeIce} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "ghost") {
      return (
        <div className={classes.typeGhost} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "dragon") {
      return (
        <div className={classes.typeDragon} key={i}>
          <p>{type}</p>
        </div>
      );
    }
    if (type === "dark") {
      return (
        <div className={classes.typeDark} key={i}>
          <p>{type}</p>
        </div>
      );
    }
  });

  return (
    <div
      className="col-xs-1 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-evenly my-3"
      key={props.id}
    >
      <div className={`card ${classes.cardStyle}`}>
        <div className={classes.imgStyle}>
          <img src={props.image} className="card-img-top" alt={props.name} />
          <p className="text-secondary fw-bold">
            Nº {pokemonNumber.padStart(3, 0)}
          </p>
        </div>
        <div className="card-body">
          <div className={classes.orderNamePokebola}>
            <h4 className="card-title">{props.name}</h4>

            <div className={!props.pokeFavClass ? classes.pokebola : classes.pokebolaCatch} onClick={handlePokeFav}>
              <div className={props.pokeFavClass ? classes.detailPokebolaCatch : classes.detailPokebola}></div>
            </div>
          </div>

          <div className={classes.typeStyle}>{classType}</div>

          <button className={classes.buttonStyle} onClick={showModalHandler}>
            Pokedex
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachCharacter;
