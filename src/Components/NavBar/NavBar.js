import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/birthdaywishes">Birthday Wishes</Link>
            <Link to="/memories">Memories</Link>
        </div>
    )
}
export default NavBar