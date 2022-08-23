// Css
import classes from "./App.module.css";

// Components
import Characters from "./components/Characters/Characters";
import Pagination from "./components/layout/Pagination";
// import Register from "./components/User/Register";
import Footer from "./components/layout/Footer";

// Boostrap
// import { Container } from "react-bootstrap";

// Context
import { PokemonContextProvider } from "./context/charactersContext";

const App = () => {
  return (
    <>
      <PokemonContextProvider>
        <Pagination />
        <main className={`${classes.pokeFondo} p-5`}>
          {/* <Container>
          <Register />
        </Container> */}
          <Characters />
          <div className={classes.arrowUpContainer}>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </main>
      </PokemonContextProvider>
      <Footer />
    </>
  );
};

export default App;
