// Css
import classes from "./App.module.css";

// Components
import Header from "./components/layout/Header";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/layout/Pagination";
import Register from "./components/User/Register";
import Footer from "./components/layout/Footer";

// Boostrap
import { Container } from "react-bootstrap";

// Context
import { PokemonContextProvider } from "./context/charactersContext";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <Header />
        <main className={classes.pokeFondo}>
          {/* <Container>
          <Register />
        </Container> */}
          <Pagination />
          <Characters />
        </main>
      </PokemonContextProvider>
      <Footer />
    </>
  );
}

export default App;
