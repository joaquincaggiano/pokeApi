// Css
import classes from "./NotFound.module.css";

// Image stop
import pikachuStop from "../../img/pokeStop.png";

function NotFound(props) {
  return (
    <div className={classes.notFoundBox}>
      <h1>404 | Poke Page Not Found</h1>
      {props.search && <h3>{props.search} is not a Pokemon</h3>}
      <img className={classes.imgStop} src={pikachuStop} alt="pikachuStop" />
    </div>
  );
}

export default NotFound;
