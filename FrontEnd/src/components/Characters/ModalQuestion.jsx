import React, { useEffect, useState } from 'react'
import {Card } from 'react-bootstrap'
import axios from 'axios'

import styles from './ModalQuestion.module.css'

const ModalQuestion = (props) => {
   
    const [question, setQuestion ] = useState()
    const [answer, setAnswer] = useState()
useEffect(() => {
    axios.get('http://localhost:3030/triviaApi/random')
    .then(response =>
       { 
        if(response.status === 200){
            setQuestion(response.data)}
        })
    .catch(error => console.log(error))
}, [])
function handleOnClick(){
    if(answer === question.correctAnswer){
        console.log("CORRECT!!!")
    }else{
        console.log("INCORRECT")
    }
  }

  return (
    <div className={styles.backdrop}>
        <div className={styles.cardPokemon}> 
    <ul>
        <div>{question?.question}</div>
        <div><input className='form-check-input' type='radio' name='trivia-question' value={question?.answer1} onCdivck={(e)=>setAnswer(e.target.value)}/>
        <label className='form-check-label'>{question?.answer1}</label> 
        </div>
        <div><input className='form-check-input' type='radio' name='trivia-question' value={question?.answer2} onCdivck={(e)=>setAnswer(e.target.value)}/>
        <label className='form-check-label'>{question?.answer2}</label> 
        </div>
        <div><input className='form-check-input' type='radio' name='trivia-question' value={question?.answer3} onCdivck={(e)=>setAnswer(e.target.value)}/>
        <label className='form-check-label'>{question?.answer3}</label>
         </div>
        <div><input className='form-check-input' type='radio'name='trivia-question'  value={question?.answer4} onCdivck={(e)=>setAnswer(e.target.value)}/>
        <label className='form-check-label'>{question?.answer4}</label> 
        </div>
        <button className='btn btn-primary' onClick={handleOnClick}>Submit Answer</button>
        <button className='btn btn-secondary m-auto' onClick={()=>props.setOpenTrivia(false)}>Close</button>
    </ul>

        </div>
    
    </div>
  );
};

export default ModalQuestion;
