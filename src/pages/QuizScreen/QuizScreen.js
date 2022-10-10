import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizScreen.css';
const QuizScreen = () => {
  const data = useLoaderData()
  const {name, questions} = data.data
  return (
    <div className='quiz-container'>
      {name}
      <div>
        {questions.map(question => <div>{question.question.slice(3, -4)}</div>)}
      </div>
    </div>
  )
}

export default QuizScreen