import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import ReactAudioPlayer from 'react-audio-player'
import mp3 from './dynamite.mp3'
import hbd from './HappyBirthday.mp3'


const Header = () => {

    return(
        <header><Link to='/'>
            <FontAwesomeIcon icon={faCrown}/> Diane Kosuda
             </Link>
            <ReactAudioPlayer
                src={hbd}
                autoPlay
                loop
                controls
                className="audio"
            />
        </header>
    )
}
export default Header