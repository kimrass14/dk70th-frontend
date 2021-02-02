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
                    <h1>Diane Kosuda</h1>
                </div>
            </div>
        </>
    )
}
export default Homepage