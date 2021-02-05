import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    return(
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/birthdaywishes" className="link">Birthday Wishes</Link>
            <Link to="/memories" className="link">Memories</Link>
        </div>
    )
}
export default NavBar