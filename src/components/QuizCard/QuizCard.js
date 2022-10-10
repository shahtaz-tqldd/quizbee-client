import React from 'react'
import './QuizCard.css'
const QuizCard = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div className='quiz-card'>
            <img src={logo} alt={name} />
            <h4>{name}</h4>
            <p>{total}</p>
        </div>
    )
}

export default QuizCard