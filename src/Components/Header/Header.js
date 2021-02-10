import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'

const Header = () => {

    return(
        <header><Link to='/'>
            <FontAwesomeIcon icon={faCrown}/> Diane Kosuda
             </Link>
        </header>
    )
}
export default Header