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

// Hook
import { useRef } from "react";


const App = () => {
  const headerRef = useRef();

  const upScrollHandler = () => {
    console.log(headerRef)
    headerRef.current.scrollIntoView({behavior: "smooth"});
  }
  return (
    <UserProvider>
      <BrowserRouter>
        <PokemonContextProvider>
          <div ref={headerRef}>
            <Header />
          </div>
          <main>
            <PokemonRoutes />
            <div onClick={upScrollHandler} className={classes.arrowUpContainer}>
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </main>
        </PokemonContextProvider>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
