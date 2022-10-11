import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../../components/QuizCard/QuizCard';
import './TopicsPage.css';

const TopicsPage = () => {
    const quiz = useLoaderData()
    console.log(quiz)
    return (
        <div className='topic'>
            <h2>Take a Quiz on a Topic Now</h2>
            <div className='quiz-container'>
                {
                    quiz.data.map(sub => <QuizCard key={sub.id} topic={sub} />)
                }
            </div>
        </div>
    )
}

export default TopicsPage