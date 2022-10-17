// Hook
import { useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

// Boostrap
import { Form, Card, Container, Button } from "react-bootstrap";

// Axios
import axios from "axios";

export default function TriviaEditForm() {
  // State file
  const [triviaImage, setTriviaImage] = useState();

  // Navigate
  const navigate = useNavigate();

  // trivia Storage
  const oneTrivia = JSON.parse(localStorage.getItem("triviaQuestion"));
  console.log("oneTrivia", oneTrivia);

  function onChangeImage(e) {
    const image = e.target.files[0];
    setTriviaImage(image);
  }

  const updateTriviaHandler = (e) => {
    e.preventDefault();

    const triviaBody = new FormData();
    triviaBody.append("question", e.target[0].value);
    triviaBody.append("answer1", e.target[1].value);
    triviaBody.append("answer2", e.target[2].value);
    triviaBody.append("answer3", e.target[3].value);
    triviaBody.append("answer4", e.target[4].value);
    triviaBody.append("correctAnswer", e.target[5].value);
    triviaBody.append("image", triviaImage);

    axios
      .put(`http://localhost:3030/triviaApi/update/${oneTrivia.id}`, triviaBody)
      .then((response) => console.log("response", response))
      .catch((err) => console.error(err));
    navigate("/trivia/viewAll");
  };

  return (
    <Container className="pt-5">
      <Card
        className="pt-3 w-75 m-auto rounded container-fluid"
        style={{
          background: "rgb(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <h1 className="text-black text-center">Edit a trivia question</h1>

        {oneTrivia.image !== null ? (
          <div>
            <img
              // className={`rounded-circle`}
              src={`http://localhost:3030/triviaImages/${oneTrivia.image}`}
            />
            {/* <i className="fa-solid fa-camera"></i> */}
          </div>
        ) : (
          ""
        )}

        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={updateTriviaHandler}
        >
          {oneTrivia.image !== null ? (
            <Form.Group className="mb-3">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                name="image"
                type="file"
                onChange={onChangeImage}
              ></Form.Control>
            </Form.Group>
          ) : (
            ""
          )}
          <Form.Group className="mb-3">
            <Form.Label>Question:</Form.Label>
            <Form.Control
              name="question"
              type="text"
              defaultValue={oneTrivia.question}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 1:</Form.Label>
            <Form.Control
              name="answer1"
              type="text"
              defaultValue={oneTrivia.answer1}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 2:</Form.Label>
            <Form.Control
              name="answer2"
              type="text"
              defaultValue={oneTrivia.answer2}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 3:</Form.Label>
            <Form.Control
              name="answer3"
              type="text"
              defaultValue={oneTrivia.answer3}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 4:</Form.Label>
            <Form.Control
              name="answer4"
              type="text"
              defaultValue={oneTrivia.answer4}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correct answer:</Form.Label>
            <Form.Control
              name="correctAnswer"
              type="text"
              defaultValue={oneTrivia.correctAnswer}
            ></Form.Control>
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
              //   onChange={(e) => onChangeImage(e)}
            ></Form.Control>
          </Form.Group> */}
          <Button type="submit">Submit trivia question</Button>
        </Form>
      </Card>
    </Container>
  );
}
