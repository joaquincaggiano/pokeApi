// Logo
import logoFooter from "../../img/footer.jpg";

// Css
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <img
        className={classes.logoPokemonStyle}
        src={logoFooter}
        alt="logoPokemon"
      />
      <div className={classes.footerText}>
        <h2 className={classes.owners}>Joaquín Caggiano - Catalina Quarleri</h2>
        <p className={classes.foundation}>©2022 PokeApi</p>
      </div>
    </footer>
  );
}

export default Footer;
