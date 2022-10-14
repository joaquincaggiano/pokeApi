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
  const dispatch = useDispatch();

  const { setUserLogged, userLogged, isAdmin } = useContext(UserContext);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  // console.log("parsed user", user);

  function handleLogOut() {
    localStorage.removeItem("user");
    setUserLogged(false);
    dispatch(initialStateFunction([]));
    navigate("/user/login");
  }

  return (
    <div className={styles.containerProfile}>
      {userLogged && (
        <div className={styles.cardStyle}>
          <div className="text-center">
            <h2 className={styles.welcomeTitle}>Welcome {user.userName}!!!</h2>
            {isAdmin && <p>You are an Admin!</p>}
          </div>

          <div className={styles.cardContent}>
            <div className={styles.row_image}>
              <img src={`http://localhost:3030/images/${user.file}`} alt="" />
            </div>

            <div className={styles.row_options}>
              {isAdmin && (
                <>
                  <Link to={`/trivia/create`}>Create Trivia Question</Link>
                  <Link to={`/trivia/viewAll`}>View all Trivia Question</Link>
                </>
              )}
              <Link to={"/user/caught-pokemons"}>Caught Pokemons</Link>

              <Link to={`/user/update/${user.id}`}>Update User</Link>

              <button className={styles.buttonLogout} onClick={handleLogOut}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      )}

      {/* {userLogged && (
        <div className={styles.cardStyle}>
          <img
            className={`rounded-circle ${styles.imgUser}`}
            src={`http://localhost:3030/images/${user.file}`}
          />
          <h2>Welcome {user.userName}!!!</h2>
          {isAdmin && <p>You are an Admin!</p>}
          <p>Email: {user.email}</p>

          {isAdmin && 
          <>
          <Link className={styles.buttonUpdate} to={`/trivia/create`}>
          Create Trivia Question
        </Link>
        <Link className={styles.buttonUpdate} to={`/trivia/viewAll`}>
          View all Trivia Question
        </Link>
        </>}

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
      )} */}
    </div>
  );
}

export default Profile;
