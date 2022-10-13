import {Form, Card, Container, Button} from 'react-bootstrap'

function TriviaForm() {
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
        <p>Make it hard but not that hard! Remember that we want our users to have fun!</p>
    <Form
    className="text-white p-3 align-self-center container-fluid"> 
        <Form.Group className="mb-3">
            <Form.Label>
                Question:
            </Form.Label>
            <Form.Control
            name='question'
            type="text">

            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
                Answer 1:
            </Form.Label>
            <Form.Control
            name='answer1'
            type="text">
                
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
            Answer 2:

            </Form.Label>
            <Form.Control 
            name='answer2'
            type="text">
                
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
            Answer 3:

            </Form.Label>
            <Form.Control
            name='answer3'
            type="text">
                
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
            Answer 4:

            </Form.Label>
            <Form.Control
            name='answer4'
            type="text">
                
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
                Correct answer: 
            </Form.Label>
            <Form.Control
            name='correctAnswer'
            type="text">
                
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>
            Image:
            </Form.Label>
            <Form.Control
            type="file">
                
            </Form.Control>
        </Form.Group>
        <Button type='submit'>Submit trivia question</Button>
    </Form>
    </Card>
    </Container>
  )
}

export default TriviaForm