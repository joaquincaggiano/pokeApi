// Css
import classes from "./App.module.css"

// Components
import Header from "./components/layout/Header";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/layout/Pagination";
import Register from "./components/User/Register";

// Boostrap
import { Container } from "react-bootstrap";

// Context
import {PokemonContextProvider} from "./context/charactersContext"

function App() {
  return (
    <>
        <PokemonContextProvider>
      <Header />
      <main className={classes.pokeFondo} /*style={{backgroundColor: "black"}}*/>
        {/* <Container>
          <Register />
        </Container> */}
          <Pagination />
          <Characters />
      </main>
        </PokemonContextProvider>
    </>
  );
}

export default App;
