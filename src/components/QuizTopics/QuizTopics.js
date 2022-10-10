import React from 'react'
import './QuizTopics.css'
import QuizCard from '../QuizCard/QuizCard'

const QuizTopics = ({ topics }) => {

    return (
        <div className='quiz-container'>
            {topics.data.map(topic => <QuizCard key={topic.id} topic={topic} />)}
        </div>
    )
}

export default QuizTopics