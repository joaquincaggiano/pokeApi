// Components
import Header from "./components/layout/Header";
import Characters from "./components/Characters/Characters";
import Register from "./components/User/Register";

// Boostrap
import { Container } from "react-bootstrap";

// Context
import {PokemonContextProvider} from "./context/charactersContext"

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Container>
          <Register />
        </Container> */}
        <PokemonContextProvider>
          <Characters />
        </PokemonContextProvider>
      </main>
    </>
  );
}

export default App;
