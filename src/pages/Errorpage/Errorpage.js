import React from 'react'
import { Link } from 'react-router-dom'
import './Errorpage.css'

const Errorpage = () => {
  return (
    <div className='error-page'>
      <h1>404</h1> 
      <p>Page Not Found!</p>
      <span>Go back to <Link to='/'>Homepage</Link></span>
    </div>
  )
}

export default Errorpage