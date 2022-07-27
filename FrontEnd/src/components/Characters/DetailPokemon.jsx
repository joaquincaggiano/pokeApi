// Hooks
import React, { useContext, useState, useEffect } from "react";

// Axios
import Axios from "axios";

// Context
import { PokemonContext } from "../../context/charactersContext";

// Css
import classes from "./DetailPokemon.module.css";

const DetailPokemon = React.forwardRef((props, ref) => {
  // Context
  const ctx = useContext(PokemonContext);

  // UseState
  const [onePokemon, setOnePokemon] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [actualQuote, setActualQuote] = useState("");

  // console.log("ALL POKEMONES", ctx.allPokemones);

  // useEffect
  useEffect(() => {
    const unPokemon = ctx.allPokemones.find((pokemon) => {
      return pokemon.id === props.pokemonId;
    });
    setOnePokemon(unPokemon);
    setIsLoading(false);
  }, []);
  console.log("ONE POKEMON", onePokemon);

  let finalQuotes = [];
  useEffect(() => {
    const data = async () => {
      await Axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${onePokemon.id}/`
      )
        .then((results) => {
          if (results.status === 200) {
            console.log("results", results);
            let filterQuotes = results.data?.flavor_text_entries.filter(
              (oneQuote) => {
                return oneQuote.language.name === "en";
              }
            );
            // console.log("filter quotes", filterQuotes)
            const mapQuotes = filterQuotes.map((quote) => quote.flavor_text);
            // console.log("MAP QUOTES", mapQuotes)
            const uniqueQuotes = [...new Set(mapQuotes)];
            // console.log("UNIQUE QUOTES", uniqueQuotes)

            setQuotes(uniqueQuotes);
          }
        })
        .catch((error) => console.error(error));
    };
    data();
  }, [onePokemon]);

  // console.log("QUOTES", quotes)

  const pokemonType = onePokemon?.types;
  // const pokemonMoves = onePokemon?.moves;

  // Handlers
  const leftHandlerPokemon = () => {
    setOnePokemon(
      ctx.allPokemones.find((pokemon) => {
        return pokemon.id === onePokemon.id - 1;
      })
    );
    setActualQuote("Choose a quote below");
  };

  const rightHandlerPokemon = () => {
    setOnePokemon(
      ctx.allPokemones.find((pokemon) => {
        return pokemon.id === onePokemon.id + 1;
      })
    );
    setActualQuote("Choose a quote below");
  };

  const changeQuoteHandler = (e) => {
    const type = Number(e.target.dataset.type);
    setActualQuote(quotes[type]);
  };

  return (
    <>
      {!isLoading && (
        <div>
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
                  <div className={classes.sp}></div>
                  <div className={classes.sp}></div>
                  <div className={classes.sp}></div>
                  <div className={classes.sp}></div>
                </div>
              </div>
              <div id={classes.bigbluebutton}></div>
              <div id={classes.barbutton1}></div>
              <div id={classes.barbutton2}></div>
              <div id={classes.cross}>
                <div id={classes.leftcross} onClick={leftHandlerPokemon}>
                  <div id={classes.leftT}></div>
                </div>
                <div id={classes.topcross}>
                  <div id={classes.upT}></div>
                </div>
                <div id={classes.rightcross} onClick={rightHandlerPokemon}>
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
                <strong>Name:</strong> {onePokemon.name}
                <br />
                <strong>Type:</strong>{" "}
                {pokemonType.map((type, i) => {
                  return <b key={i}>{`${type.type.name} - `}</b>;
                })}
                <br />
                <strong>Height:</strong> {onePokemon.height}''
                <br />
                <strong>Weight:</strong> {onePokemon.weight}lbs.
                <br />
                <strong>Info:</strong>
                <p>
                  {!actualQuote && "Choose a quote below"}
                  {actualQuote}
                </p>
                <br />
              </div>
              <div id={classes.blueButtons1}>
                <div
                  className={classes.blueButton}
                  data-type="0"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="1"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="2"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="3"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="4"
                  onClick={changeQuoteHandler}
                ></div>
              </div>
              <div id={classes.blueButtons2}>
                <div
                  className={classes.blueButton}
                  data-type="5"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="6"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="7"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="8"
                  onClick={changeQuoteHandler}
                ></div>
                <div
                  className={classes.blueButton}
                  data-type="9"
                  onClick={changeQuoteHandler}
                ></div>
              </div>
              <div id={classes.miniButtonGlass4}></div>
              <div id={classes.miniButtonGlass5}></div>
              <div id={classes.barbutton3}></div>
              <div id={classes.barbutton4}></div>
              <button id={classes.yellowBox1}>See more</button>
              <button id={classes.yellowBox2} onClick={props.onCloseModal}>
                Close
              </button>
              <div id={classes.bg_curve1_right}></div>
              <div id={classes.bg_curve2_right}></div>
              <div id={classes.curve1_right}></div>
              <div id={classes.curve2_right}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DetailPokemon;
