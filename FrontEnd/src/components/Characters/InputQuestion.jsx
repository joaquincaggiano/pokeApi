import styles from "./ModalQuestion.module.css";

function InputQuestion(props) {
  return (
    <div className={styles.answerBox}>
      <input
        className="form-check-input"
        type="radio"
        name="trivia-question"
        value={props.answer}
        onClick={(e) => props.setAnswer(e.target.value)}
      />
      <label className="form-check-label">{props.answer}</label>
    </div>
  );
}

export default InputQuestion;
