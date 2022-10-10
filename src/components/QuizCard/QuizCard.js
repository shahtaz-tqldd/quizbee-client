import React from 'react'
import { Link } from 'react-router-dom'
import './QuizCard.css'
const QuizCard = ({ topic, handleQuizScreen }) => {
    const { logo, name, total, id } = topic
    return (
        <div className='quiz-card'>
            <img src={logo} alt={name} />
            <h3>{name}</h3>
            <p><small>Total Question: {total}</small></p>
            <Link to={`/quiz/${id}`}><button>Take Quiz</button></Link>
        </div>
    )
}

export default QuizCard