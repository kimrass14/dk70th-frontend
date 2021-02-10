import React from 'react'
import Bounce from 'react-reveal/Bounce'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import diane from './diane.jpg'
import './Homepage.scss'

const Homepage = () => {

    return(
        <>
            <div className="homepage page">
                <img src={diane} alt="pic" />
                <div className="gradient">
                    <div className="happy-bday">
                        <Bounce ssrBounceout><Bounce top cascade><h1>Happy 70th</h1></Bounce></Bounce>
                        <Bounce top cascade><h1> Birthday</h1></Bounce>
                    </div> 
                    <div className="btn-container">
                        <Link to='/foryou'><FontAwesomeIcon icon={faAngleDoubleRight} size="3x"/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage