// assets
import pikapika from "../../img/waving-pikachu.gif";
import pokemonGO from "../../img/pokemon-go.jpg";
import pokemon1raGon from "../../img/1ra-generacion.jpg";
import pokemonLegends from "../../img/pokemon-legends.jpg";

// Css
import classes from "./Home.module.css";

// Component
import Slide from "./Slide";

// Motion
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className={classes.welcome}>
        <h1>Welcome Pokemon Master!</h1>
        <img src={pikapika} alt="pikachuGif" className={classes.pikachuGif} />
      </div>

      <motion.div className={classes.slider_container}>
        <motion.div className={classes.slider} drag="x" dragConstraints={{right: 0, left: -730}}>
          <Slide
            imgSlide={pokemonGO}
            nameImg={"Pokemon Go"}
            urlImg="https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=es_AR&gl=US"
          />

          <Slide
            imgSlide={pokemon1raGon}
            nameImg={"1ra Generación"}
            urlImg="https://consolaretro.top/juegos-pokemon/"
          />

          <Slide
            imgSlide={pokemonLegends}
            nameImg={"Pokemon Legends Arceus"}
            urlImg="https://www.nintendo.com/es-mx/store/products/pokemon-legends-arceus-switch/"
          />
        </motion.div>
      </motion.div>

      {/* <button>&larr;</button>
      <button>&rarr;</button>
      <div>dots</div> */}
    </>
  );
}

export default Home;
