// Hook
import { useContext } from "react";

//  Context
import { UserContext } from "../../context/userContext";

// Css
import style from "./Profile.module.css"

//Bootstrap 
import {Card} from 'react-bootstrap'
// router
import { useNavigate } from "react-router-dom";
function Profile() {
  const { setUserLogged } = useContext(UserContext);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("parsed user", user);

  function handleLogOut() {
    localStorage.removeItem("user");
    setUserLogged(false);
    navigate("/user/login");
  }

  return (
    <Card className={`pt-3 pb-3 w-50 m-auto rounded`} style={{background: 'rgb(255, 255, 255, 0.3)', backdropFilter: 'blur(5px)'}}>
    <div className="d-flex flex-column justify-content-center align-items-center text-white">
      <img
        className={`rounded-circle ${style.imgUser}`}
        src={`http://localhost:3030/images/${user.file}`}
      />
      <h2>Welcome {user.userName}!!!</h2>
      <p>Email: {user.email}</p>
      <button className={`${style.buttonUpdate}`}>Update User</button>
      <button className={`${style.buttonLogout}`} onClick={handleLogOut}>
        LogOut
      </button>
    </div>
    </Card>
  );
}

export default Profile;
