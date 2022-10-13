import {Container, Row, Col, Table} from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function TriviaQuestions() {
    const [questionsArray, setQuestionsArray] = useState()
    useEffect(()=>{
        axios.get('http://localhost:3030/triviaApi/all')
        .then((response)=>{
            setQuestionsArray(response.data)
        })
        .catch((error)=>{console.log(error)})
    }, [])
    console.log('questions array', questionsArray)
  return (
    <>
    {questionsArray && 
        <Container >
            <h1 className="text-white">Questions on DB</h1>
            <Table  bordered hover className="pt-3 m-auto rounded container-fluid"
      style={{
        background: "rgb(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)",
      }}>
      <thead>
        <tr>
          <th>Question</th>
          <th>Correct Answer</th>
          <th>Image</th>
          <th>Update</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {questionsArray.map((oneQuestion)=>{
            
            return  (
                <>
        <tr>
          <td>{oneQuestion.question}</td>
          <td>{oneQuestion.correctAnswer}</td>
          <td>
            {oneQuestion.image && 
         <img className='w-50' src={`http://localhost:3030/triviaImages/${oneQuestion.image}`}/>}
         </td>
          <td><button>Update question</button></td>
          <td><button>Delete question</button></td>
        </tr>
        </>
     )
    })}
        </tbody>
        </Table>
             {/* <Row className='border'>
         <Col className="text-white border">
            <p>{oneQuestion.question}</p>
            </Col>
            <Col className="text-white border"><p>{oneQuestion.correctAnswer}</p></Col>
         <Col className="text-white border">{oneQuestion.image && 
         <img className='w-50' src={`http://localhost:3030/triviaImages/${oneQuestion.image}`}/>
         }</Col>
         <Col><button>Update question</button></Col>
        </Row> */}
        </Container>
    }
    </>
        )
}

export default TriviaQuestions