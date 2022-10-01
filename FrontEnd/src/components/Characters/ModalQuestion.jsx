// Hook react
import React, { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Components
import InputQuestion from "./InputQuestion";

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
      setWrongAnswer(!wrongAnswer);
      alert("Respuesta Incorrecta");
    }
  }

  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <div className={styles.cardPokemon}>
        <h4>{question?.question}</h4>
        <InputQuestion answer={question?.answer1} setAnswer={setAnswer}/>
        <InputQuestion answer={question?.answer2} setAnswer={setAnswer}/>
        <InputQuestion answer={question?.answer3} setAnswer={setAnswer}/>
        <InputQuestion answer={question?.answer4} setAnswer={setAnswer}/>
        {/* <div className={styles.answerBox}>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer1}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer1}</label>
        </div>
        <div className={styles.answerBox}>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer2}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer2}</label>
        </div>
        <div className={styles.answerBox}>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer3}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer3}</label>
        </div>
        <div className={styles.answerBox}>
          <input
            className="form-check-input"
            type="radio"
            name="trivia-question"
            value={question?.answer4}
            onClick={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label">{question?.answer4}</label>
        </div> */}

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
