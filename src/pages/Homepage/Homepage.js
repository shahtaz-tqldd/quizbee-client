import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header';
import QuizTopics from '../../components/QuizTopics/QuizTopics';
import './Homepage.css';

const Homepage = () => {
    const topics = useLoaderData()
  return (
    <div className='home-container'>
        <Header />
        <QuizTopics topics={topics}/>
    </div>
  )
}

export default Homepage