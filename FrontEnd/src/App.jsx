// React router
import { BrowserRouter } from "react-router-dom";

// Css
import classes from "./App.module.css";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PokemonRoutes from "./routes/PokemonRoutes";

// Context
import { PokemonContextProvider } from "./context/charactersContext";
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <PokemonContextProvider>
          <Header />
          <main className={`${classes.pokeFondo}`}>
            <PokemonRoutes />
            <div className={classes.arrowUpContainer}>
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </main>
        </PokemonContextProvider>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
