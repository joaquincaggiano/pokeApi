import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

// Hook redux
import { useSelector, useDispatch } from "react-redux";

// Reducers functions
import { addPokeToFav } from "../../features/favPokeSlice/favPokeSlice";

import styles from "./ModalQuestion.module.css";

const ModalQuestion = (props) => {
  // Redux functions
  const dispatch = useDispatch();
  const { pokemonFavList } = useSelector((state) => state.pokeFav);

  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [wrongAnswer, setWrongAnswer] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:3030/triviaApi/random")
      .then((response) => {
        if (response.status === 200) {
          console.log("response trivia", response.data);
          setQuestion(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [wrongAnswer]);

  function handleOnClick() {
    if (answer === question.correctAnswer) {
      console.log("CORRECT!!!", props.pokeFromTrivia);
      dispatch(addPokeToFav(props.pokeFromTrivia));
      props.onCloseModal();
      alert("Pokemon atrapado");
    } else {
      setWrongAnswer(!wrongAnswer)
      alert("Respuesta Incorrecta");
    }
  }

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <div className={styles.cardPokemon}>
        <ul>
          <div>{question?.question}</div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="trivia-question"
              value={question?.answer1}
              onClick={(e) => setAnswer(e.target.value)}
            />
            <label className="form-check-label">{question?.answer1}</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="trivia-question"
              value={question?.answer2}
              onClick={(e) => setAnswer(e.target.value)}
            />
            <label className="form-check-label">{question?.answer2}</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="trivia-question"
              value={question?.answer3}
              onClick={(e) => setAnswer(e.target.value)}
            />
            <label className="form-check-label">{question?.answer3}</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              name="trivia-question"
              value={question?.answer4}
              onClick={(e) => setAnswer(e.target.value)}
            />
            <label className="form-check-label">{question?.answer4}</label>
          </div>
          <button className="btn btn-primary" onClick={handleOnClick}>
            Submit Answer
          </button>
          <button
            className="btn btn-secondary m-auto"
            onClick={() => props.setOpenTrivia(false)}
          >
            Close
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ModalQuestion;
