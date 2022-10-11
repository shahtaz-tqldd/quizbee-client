import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.css';

const Main = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main