import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCrown} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'
import hbd from './HappyBirthday.mp3'


const Header = () => {

    return(
        <header><Link to='/'>
            <FontAwesomeIcon icon={faCrown}/> Diane Kosuda
             </Link>
            <AudioPlayer
                src={hbd}
                autoPlay
                loop
                layout="horizontal"
                showJumpControls={false}
                customProgressBarSection={[]}
                customAdditionalControls={[]}
            />
        </header>
    )
}
export default Header