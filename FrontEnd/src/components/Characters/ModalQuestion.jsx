// Hook react
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Components
import InputQuestion from "./InputQuestion";

// Hook redux
import { useDispatch } from "react-redux";

// Reducers functions
import { addPokeToFav } from "../../features/favPokeSlice/favPokeSlice";

// Router
import { useNavigate } from "react-router-dom";

// Css
import styles from "./ModalQuestion.module.css";

const ModalQuestion = (props) => {
  // Dispatch redux
  const dispatch = useDispatch();

  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [wrongAnswer, setWrongAnswer] = useState(false);

  // Navigate
  const navigate = useNavigate();

  // User ID
  const userId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:3030/triviaApi/random")
      .then((response) => {
        if (response.status === 200) {
          setQuestion(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [wrongAnswer]);

  function handleOnClick() {
    if (answer === question.correctAnswer) {
      dispatch(addPokeToFav(props.pokemonId));
      axios
        .post(`http://localhost:3030/api/user/${userId.id}/favs`, {
          id: props.pokemonId,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      props.onCloseModal();
      alert("Pokemon atrapado");
      navigate('/user/caught-pokemons')
    } else if(answer === undefined) {
      props.onCloseModal();
    }else {
      setWrongAnswer(!wrongAnswer);
      alert("Respuesta Incorrecta");
    }
  }

  console.log("QUESTION", question)

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <div className={styles.cardPokemon}>
        <h4>{question?.question}</h4>
        {question?.image != null ? <img className={styles.whoIsThatPokemon} src={`http://localhost:3030/triviaImages/${question.image}`} alt="who's that pokemon?" /> : ""}
        <InputQuestion answer={question?.answer1} setAnswer={setAnswer} />
        <InputQuestion answer={question?.answer2} setAnswer={setAnswer} />
        <InputQuestion answer={question?.answer3} setAnswer={setAnswer} />
        <InputQuestion answer={question?.answer4} setAnswer={setAnswer} />
        <div className={styles.buttonsBox}>
          <button className={styles.buttonCatch} onClick={handleOnClick}>
            Catch
          </button>
          <button
            className={styles.buttonClose}
            onClick={() => props.setOpenTrivia(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalQuestion;
