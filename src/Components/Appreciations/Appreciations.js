import React from 'react'
import './Appreciations.scss'

const Appreciations = (props) => {
    const entries = props.messages.feed.entry

    let appreciate = ''
    if(entries[0]) {
        appreciate = entries.filter(message => {return message.gsx$type.$t === "Something you admire or appreciate about her"})
            .map((element, index) => {
                return(
                    <div className="tile" key={index}>
                        <div className="message">{element.gsx$message.$t}</div>
                        <div className="name">{element.gsx$name.$t}</div>
                        {element.gsx$picture.$t != '' ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                    </div>
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