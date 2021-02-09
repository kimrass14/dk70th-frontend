import React from 'react'
import Fade from 'react-reveal/Fade'
import './Appreciations.scss'

const Appreciations = (props) => {
    const entries = props.messages.feed.entry

    let appreciate = ''
    if(entries[0]) {
        appreciate = entries.filter(message => {return message.gsx$type.$t === "Something you admire or appreciate about her"})
            .map((element, index) => {
                return(
                    <>
                        {element.gsx$picture.$t != "" ? 
                        <Fade right>
                            <div className="tile-with-pic appreciate-with-pic" key={index}>
                                <div className="message-div">
                                    <p className="message">{element.gsx$message.$t}</p>
                                    <p className="name">{element.gsx$name.$t}</p>
                                </div>
                                <img src={element.gsx$picture.$t} alt="pic"/>
                            </div>
                        </Fade> : 
                        <Fade right>
                            <div className="tile appreciate" key={index}>
                                <div className="message">{element.gsx$message.$t}</div>
                                <div className="name">{element.gsx$name.$t}</div>
                            </div>
                        </Fade>}
                    </>
                )
            })
    }

    return(
        <div className="appreciations section">
            <h2>Appreciations</h2>
            <div className="tile-container">{appreciate}</div>
        </div>
    )
}
export default Appreciations