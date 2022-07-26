// React
import React, { useContext } from "react";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./DetailPokemon.module.css";

const DetailPokemon = React.forwardRef((props, ref) => {
  const ctx = useContext(PokemonContext);

  // console.log("ALL POKEMONES", ctx.allPokemones);

  const onePokemon = ctx.allPokemones.find((pokemon) => {
    return pokemon.id === props.pokemonId;
  });
  // console.log("ONE POKEMON",onePokemon)
  const pokemonType = onePokemon.types;
  const pokemonMoves = onePokemon.moves;

  return (
    <>
      {/* <div className={classes.backdrop} onClick={props.onCloseModal} />
      <div ref={ref} className={`card ${classes.modal}`}>
        <img
          src={onePokemon.sprites.other.dream_world.front_default}
          className="card-img-top"
          alt={onePokemon.name}
          style={{ width: "25rem", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{onePokemon.name}</h5>
        </div>
        <h5>HP: {onePokemon.stats[0].base_stat}</h5>
        <h3>Type:</h3>
        <ul className="list-group list-group-flush">
          {pokemonType.map((oneType, i) => {
            return <li key={i} className="list-group-item">{oneType.type.name}</li>;
          })}
        </ul>
        <h3>Moves:</h3>
        <div className='overflow-scroll' style={{maxHeight: '8rem'}}>
        <ul className="list-group list-group-flush ">
          {pokemonMoves.map((oneMove, i) => {
            return <li key={i} className="list-group-item">{oneMove.move.name}</li>;
          })}
        </ul>
        </div>
        <div className="card-body">
          <button onClick={props.onCloseModal}>Close</button>
        </div>
      </div> */}

      <div className={classes.backdrop} onClick={props.onCloseModal} />
      <div id={classes.pokedex} ref={ref}>
        <div id={classes.left}>
          <div id={classes.logo}></div>
          <div id={classes.bg_curve1_left}></div>
          <div id={classes.bg_curve2_left}></div>
          <div id={classes.curve1_left}>
            <div id={classes.buttonGlass}>
              <div id={classes.reflect}> </div>
            </div>
            <div id={classes.miniButtonGlass1}></div>
            <div id={classes.miniButtonGlass2}></div>
            <div id={classes.miniButtonGlass3}></div>
          </div>
          <div id={classes.curve2_left}>
            <div id={classes.junction}>
              <div id={classes.junction1}></div>
              <div id={classes.junction2}></div>
            </div>
          </div>
          <div id={classes.screen}>
            <div id={classes.topPicture}>
              <div id={classes.buttontopPicture1}></div>
              <div id={classes.buttontopPicture2}></div>
            </div>
            <div id={classes.picture}>
              <img
                src={onePokemon.sprites.other.dream_world.front_default}
                alt={onePokemon.name}
                height="150"
              />
            </div>
            <div id={classes.buttonbottomPicture}></div>
            <div id={classes.speakers}>
              <div class={classes.sp}></div>
              <div class={classes.sp}></div>
              <div class={classes.sp}></div>
              <div class={classes.sp}></div>
            </div>
          </div>
          <div id={classes.bigbluebutton}></div>
          <div id={classes.barbutton1}></div>
          <div id={classes.barbutton2}></div>
          <div id={classes.cross}>
            <div id={classes.leftcross}>
              <div id={classes.leftT}></div>
            </div>
            <div id={classes.topcross}>
              <div id={classes.upT}></div>
            </div>
            <div id={classes.rightcross}>
              <div id={classes.rightT}></div>
            </div>
            <div id={classes.midcross}>
              <div id={classes.midCircle}></div>
            </div>
            <div id={classes.botcross}>
              <div id={classes.downT}></div>
            </div>
          </div>
        </div>
        <div id={classes.right}>
          <div id={classes.stats}>
            <strong>Name:</strong> Psyduck
            <br />
            <strong>Type:</strong> Water
            <br />
            <strong>Height:</strong> 2'072''
            <br />
            <strong>Weight:</strong> 43.2 lbs.
            <br />
            <br />
            <strong>The duck Pokemon</strong>
            <br />
            Uses mysterious powers to perform various attacks.
          </div>
          <div id={classes.blueButtons1}>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
          </div>
          <div id={classes.blueButtons2}>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
            <div class={classes.blueButton}></div>
          </div>
          <div id={classes.miniButtonGlass4}></div>
          <div id={classes.miniButtonGlass5}></div>
          <div id={classes.barbutton3}></div>
          <div id={classes.barbutton4}></div>
          <div id={classes.yellowBox1}></div>
          <div id={classes.yellowBox2}></div>
          <div id={classes.bg_curve1_right}></div>
          <div id={classes.bg_curve2_right}></div>
          <div id={classes.curve1_right}></div>
          <div id={classes.curve2_right}></div>
        </div>
        <button onClick={props.onCloseModal}>Close</button>
      </div>
    </>
  );
});

export default DetailPokemon;
