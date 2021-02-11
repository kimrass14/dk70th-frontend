import React from 'react'
import Fade from 'react-reveal/Fade'
import './Donna.scss'

const Donna = (props) => {

    const entries = props.messages.feed.entry
        
    let message = ''
    if(entries[0]) {
        message = entries.filter(message => {return message.gsx$type.$t === "Favorite memory"})
        .map((element, index) => {
            return(
                <>
                        {element.gsx$picture.$t !== "" ? 
                        <Fade right>
                            <div className={element.gsx$size.$t === "extra-large" ? "tile-with-horizontal-pic memory-with-pic" : "tile-with-pic memory-with-pic"} key={index}>
                                <div className="message-div">
                                    <p className="message">{element.gsx$message.$t}</p>
                                    <p className="name">{element.gsx$name.$t}</p>
                                </div>
                                <img src={element.gsx$picture.$t} alt="pic"/>
                            </div>
                        </Fade> : 
                        <Fade right>
                            <div className={element.gsx$size.$t === "large" ? "large tile memory" : "tile memory"} key={index}>
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
        <div className="memories section">
            <h2 className="memories">Donna</h2>
            <div className="tile-container">{message}</div>
        </div>
    )
}
export default Donna