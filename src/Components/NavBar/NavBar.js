import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    return(
        <div className="navbar">
            <Link to="/foryou" className="link">To You</Link>
            <Link to="/birthdaywishes" className="link">Birthday Wishes</Link>
            <Link to="/memories" className="link">Memories</Link>
            <Link to="/appreciations" className="link">Appreciations</Link>
            <Link to="/donna" className="link">From Donna</Link>
            <Link to="/kosudas" className="link">From Kosudas</Link>
            <Link to="/photoalbum" className="link">Photo Album</Link>
        </div>
    )
}
export default NavBar