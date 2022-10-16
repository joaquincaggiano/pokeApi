// Boostrap
import { Container, Table } from "react-bootstrap";

// Axios
import axios from "axios";

// Hooks
import { useEffect, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

// Css
import classes from "./TriviaQuestion.module.css"

function TriviaQuestions() {
  const navigate = useNavigate();

  const [questionsArray, setQuestionsArray] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/triviaApi/all")
      .then((response) => {
        setQuestionsArray(response.data);
        // localStorage.setItem("triviaQuestions", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log("questions array", questionsArray);

  // const goToUpdate = () => {
  //   navigate(`/trivia/update/${oneQuestion.id}`)
  // }

  return (
    <>
      {questionsArray && (
        <Container>
          <h1 className="text-white text-center p-3">Questions on DB</h1>
          <Table
            bordered
            hover
            className="pt-3 m-auto rounded container-fluid"
            style={{
              background: "rgb(255, 255, 255, 0.3)",
              backdropFilter: "blur(5px)",
            }}
          >
            <thead>
              <tr className="text-center">
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Image</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {questionsArray.map((oneQuestion, i) => {
                return (
                    <tr key={i}>
                      <td>{oneQuestion.question}</td>
                      <td>{oneQuestion.correctAnswer}</td>
                      <td>
                        {oneQuestion.image && (
                          <img
                            className="w-50"
                            src={`http://localhost:3030/triviaImages/${oneQuestion.image}`}
                          />
                        )}
                      </td>
                      <td>
                        <button onClick={() => {
                          localStorage.setItem("triviaQuestion", JSON.stringify(oneQuestion));
                          navigate(`/trivia/update/${oneQuestion.id}`)
                          }} 
                          className={classes.buttonUpdate}>Update</button>
                      </td>
                      <td>
                        <button className={classes.buttonDelete}>Delete</button>
                      </td>
                    </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
}

export default TriviaQuestions;
