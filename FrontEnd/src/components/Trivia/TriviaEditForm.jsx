// Boostrap
import { Form, Card, Container, Button } from "react-bootstrap";

export default function TriviaEditForm() {

  const oneTrivia = JSON.parse(localStorage.getItem("triviaQuestion"));
  console.log("oneTrivia", oneTrivia)

  const updateTriviaHandler = (e) => {
    e.preventDefault();
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
        <h1 className="text-black text-center">Edit a trivia question</h1>

        <Form
          className="text-white p-3 align-self-center container-fluid"
          onSubmit={updateTriviaHandler}
        >
          <Form.Group className="mb-3">
            <Form.Label>Question:</Form.Label>
            <Form.Control name="question" type="text" defaultValue={oneTrivia.question}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 1:</Form.Label>
            <Form.Control name="answer1" type="text" defaultValue={oneTrivia.answer1}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 2:</Form.Label>
            <Form.Control name="answer2" type="text" defaultValue={oneTrivia.answer2}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 3:</Form.Label>
            <Form.Control name="answer3" type="text" defaultValue={oneTrivia.answer3}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer 4:</Form.Label>
            <Form.Control name="answer4" type="text" defaultValue={oneTrivia.answer4}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correct answer:</Form.Label>
            <Form.Control name="correctAnswer" type="text" defaultValue={oneTrivia.correctAnswer}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
            //   onChange={(e) => onChangeImage(e)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Submit trivia question</Button>
        </Form>
      </Card>
    </Container>
  )
}
