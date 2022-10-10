import React from 'react'
import './Header.css'
import headerImg from '../../images/projects.svg'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-text'>
            <h3>Take a quick quiz Now</h3>
            <p>Welcome to quiz bee. Quiz bee allow you to take quizes in your preferred programming topics.</p>
            <button>Get started</button>
        </div>
        <div className='header-image'>
            <img src={headerImg} alt='quiz team' />
        </div>
    </div>
  )
}

export default Header