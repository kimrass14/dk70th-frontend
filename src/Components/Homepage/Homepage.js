import React from 'react'
import {Link} from 'react-router-dom'
import diane from './diane.jpg'
import './Homepage.scss'

const Homepage = () => {

    return(
        <>
            <div className="homepage">
                <img src={diane} alt="pic" />
                <div className="name">Diane Kosuda</div>
            </div>
        </>
    )
}
export default Homepage