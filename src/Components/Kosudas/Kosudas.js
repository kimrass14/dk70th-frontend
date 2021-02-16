import React from 'react'
import Fade from 'react-reveal/Fade'
import './Kosudas.scss'
import elonVideo from './from-elon.mp4'
import mikAndEmmaVideo from './from-mik-emma.mp4'

const Kosudas = (props) => {

    const entries = props.messages.feed.entry
        
    let message = ''
    if(entries[0]) {
        message = entries.filter(message => {return message.gsx$type.$t === "Kosudas"})
        .map((element, index) => {
            return(
                <>
                        {element.gsx$picture.$t !== "" ? 
                        <Fade right>
                            <div className={element.gsx$size.$t === "extra-large" ? "tile-with-horizontal-pic kosuda-with-pic" : "tile-with-pic kosuda-with-pic"} key={index}>
                                <div className="message-div">
                                    <p className="message">{element.gsx$message.$t}</p>
                                    <p className="name">{element.gsx$name.$t}</p>
                                </div>
                                <img src={element.gsx$picture.$t} alt="pic"/>
                            </div>
                        </Fade> : 
                        <Fade right>
                            <div className={element.gsx$size.$t === "large" ? "large tile kosuda" : "tile kosuda"} key={index}>
                                <div className="message">{element.gsx$message.$t}</div>
                                <div className="name">{element.gsx$name.$t}</div>
                            </div>
                        </Fade>}
                    </>
            )
        })
    }
        
    const loading = "loading"

    return(
        <div className="kosudas section">
            <h2 className="kosudas">From Kosuda Family</h2>
            <div className="videos-div">
                <video src={elonVideo} controls controlsList="nodownload" disablePictureInPicture className="vid">Your browser does not support this video. Please switch to a different browser</video>
                <video src={mikAndEmmaVideo} controls controlsList="nodownload" disablePictureInPicture className="vid">Your browser does not support this video. Please switch to a different browser</video>
            </div>
            <div className="tile-container">{message}</div>
        </div>
    )
}
export default Kosudas