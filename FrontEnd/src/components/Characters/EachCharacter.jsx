// Css
import classes from "./EachCharacter.module.css";

function EachCharacter(props) {
  const showModalHandler = (e) => {
    props.setPokemonId(props.id);
    props.setShowModal(true);
  };

  const pokemonNumber = String(props.id);

  const handlePokeFav = () => {
    if (localStorage.getItem("user") === null) {
      alert("You need to log in");
      props.setOpenTrivia(false);
    } else if (!props.pokeFavClass) {
      props.setPokemonId(props.id);
      props.setOpenTrivia(true);
    } else {
      alert("This Pokemon is already in your team!");
    }
  };
  const classType = props.typePokemon?.map((type, i) => {
    const typeUppercase = type[0].toUpperCase() + type.slice(1);
    const typeNameClass = `type${typeUppercase}`;
    const classType = classes[typeNameClass];
    return (
      <div className={classType} key={i}>
        <p>{type}</p>
      </div>
    );
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

            <div
              className={
                !props.pokeFavClass ? classes.pokebola : classes.pokebolaCatch
              }
              onClick={handlePokeFav}
            >
              <div
                className={
                  props.pokeFavClass
                    ? classes.detailPokebolaCatch
                    : classes.detailPokebola
                }
              ></div>
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
