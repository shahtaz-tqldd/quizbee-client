import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import './QuizScreen.css';
const QuizScreen = () => {
  const data = useLoaderData()
  const {name, questions} = data.data
  return (
    <div className='quizContainer'>
      <h2>{name}</h2>
      <div>
        {questions.map(ques => <QuestionCard key={ques.id} ques={ques} /> )}
      </div>
    </div>
  )
}

export default QuizScreen