import React from 'react'
import {Link} from 'react-router-dom'
import diane from './diane.jpg'
import './Homepage.scss'

const Homepage = () => {

    return(
        <>
            <div className="homepage">
                <img src={diane} alt="pic" />
                <div className="gradient">
                    <h1>Happy 70th Birthday</h1>
                    <div className="btn-container">
                        <button><Link to="/memories">Next</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage