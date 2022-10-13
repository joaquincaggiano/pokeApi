// React router
import { BrowserRouter } from "react-router-dom";

// Hook de redux
import { useSelector, useDispatch } from "react-redux";

// Functions de redux slice
import { initialStateFunction } from "./features/favPokeSlice/favPokeSlice";

// Css
import classes from "./App.module.css";

// Axios
import axios from "axios";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PokemonRoutes from "./routes/PokemonRoutes";

// Context
import { PokemonContextProvider } from "./context/charactersContext";
import { UserProvider } from "./context/userContext";

// Hook
import { useRef, useEffect } from "react";


const App = () => {
  // Dispatch redux
  const dispatch = useDispatch();

  // User ID
  const userId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:3030/api/user/${userId?.id}/favs`)
      .then((response) => {
        dispatch(initialStateFunction(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

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
