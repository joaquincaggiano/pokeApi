// Hook redux
import { useDispatch } from "react-redux";
// Function Redux
import { initialStateFunction } from "../../features/favPokeSlice/favPokeSlice";

// Hook
import { useContext } from "react";

//  Context
import { UserContext } from "../../context/userContext";

// Css
import styles from "./Profile.module.css";

// router
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  // dispatch redux
  const dispatch = useDispatch()

  const { setUserLogged, userLogged } = useContext(UserContext);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log("parsed user", user);

  function handleLogOut() {
    localStorage.removeItem("user");
    setUserLogged(false);
    dispatch(initialStateFunction([]))
    navigate("/user/login");
  }

  return (
    <>
      {userLogged && (
        <div className={styles.cardStyle}>
          <img
            className={`rounded-circle ${styles.imgUser}`}
            src={`http://localhost:3030/images/${user.file}`}
          />
          <h2>Welcome {user.userName}!!!</h2>
          <p>Email: {user.email}</p>

          <Link className={styles.buttonCatch} to={"/user/caught-pokemons"}>
            Caught Pokemons
          </Link>

          <Link className={styles.buttonUpdate} to={`/user/update/${user.id}`}>
            Update User
          </Link>

          <button className={styles.buttonLogout} onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      )}
    </>
  );
}

export default Profile;
