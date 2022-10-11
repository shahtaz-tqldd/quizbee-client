import React from 'react'
import './QuestionCard.css';

const QuestionCard = ({ ques }) => {
    const { question, correctAnswer, id, options } = ques
    return (
        <div className='question-container'>
            <h3>{question.slice(3, -4).replace('&nbsp;', ' ')}</h3>
            {options.map(op => <div><input type="radio" name="" id="" />{op}</div>)}
        </div>
    )
}

export default QuestionCard