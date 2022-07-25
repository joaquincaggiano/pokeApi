import {useRef} from 'react'


function EachCharacter(props) {
const viewPokemonButtonRef = useRef()

    const showModalHandler = (e) => {
    //   console.log(e.target)
      props.setPokemonId(props.id)
      props.setShowModal(true)
      
    }

  return (
    <div className="col-3" key={props.id}>
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <button onClick={showModalHandler}>Ver Pokemon</button>
        </div>
      </div>
    </div>
  );
}

export default EachCharacter;
