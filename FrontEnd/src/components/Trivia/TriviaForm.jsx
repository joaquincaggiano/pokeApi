import { Form, Card, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TriviaForm() {
  const [triviaImage, setTriviaImage] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const triviaBody = new FormData();
    triviaBody.append("question", e.target[0].value);
    triviaBody.append("answer1", e.target[1].value);
    triviaBody.append("answer2", e.target[2].value);
    triviaBody.append("answer3", e.target[3].value);
    triviaBody.append("answer4", e.target[4].value);
    triviaBody.append("correctAnswer", e.target[5].value);
    triviaBody.append("image", triviaImage);

    axios
      .post("http://localhost:3030/triviaApi/create", triviaBody)
      .then((response) => console.log("response", response))
      .catch((err) => console.error(err));
    navigate("/trivia/viewAll");
  }

  function onChangeImage(e) {
    // console.log('image', e)
    const image = e.target.files[0];
    // console.log('image', image)
    setTriviaImage(image);
  }
  return (
    <Container className="pt-5">
      <Card
        className="pt-3 w-75 m-auto rounded container-fluid"
        style={{
          background: "rgb(255, 255, 255, 0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <h1>Create a trivia question</h1>
        <p>
          Make it hard but not that hard! Remember that we want our users to
          have fun!
        </p>
        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>Question:</Form.Label>
            <Form.Control name="question" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 1:</Form.Label>
            <Form.Control name="answer1" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 2:</Form.Label>
            <Form.Control name="answer2" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 3:</Form.Label>
            <Form.Control name="answer3" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 4:</Form.Label>
            <Form.Control name="answer4" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correct answer:</Form.Label>
            <Form.Control name="correctAnswer" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => onChangeImage(e)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Submit trivia question</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default TriviaForm;
