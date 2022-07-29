import {useRef} from 'react'


function EachCharacter(props) {
const viewPokemonButtonRef = useRef()

    const showModalHandler = (e) => {
    //   console.log(e.target)
      props.setPokemonId(props.id)
      props.setShowModal(true)
    }

    const pokemonNumber = String(props.id)

    // console.log("pokemonNumber",  pokemonNumber.padStart(4, 0))

  return (
    <div className="col-3" key={props.id}>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name} - Nº {pokemonNumber.padStart(4, 0)}</h5>
          <button onClick={showModalHandler}>Ver Pokemon</button>
        </div>
      </div>
    </div>
  );
}

export default EachCharacter;
