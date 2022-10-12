import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignIn, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div className='nav-container'>

                <div className='toggle-icon' onClick={() => setOpen(!open)}>
                    {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>

                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={logo} alt="quiz bee"></img>
                        <span>quiz bee</span>
                    </Link>
                </div>

                <div className={`nav-items ${open ? 'shown' : 'hide'}`}>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>

                <div className='toggle-icon'>
                    <FontAwesomeIcon icon={faSignIn} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar