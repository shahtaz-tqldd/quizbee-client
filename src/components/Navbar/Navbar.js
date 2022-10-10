import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} alt="quiz bee"></img>
        </div>
        <div className='nav-items'>
            <Link to='/topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    </nav>
  )
}

export default Navbar