import React, {useState} from 'react'
import './Memories.scss'

const Memories = (props) => {

    const entries = props.messages.feed.entry
        
    let message = ''
    if(entries[0]) {
        message = entries.filter(message => {return message.gsx$type.$t === "Favorite memory"})
        .map((element, index) => {
            return(
                <div className="tile memory" key={index}>
                    <div className="message">{element.gsx$message.$t}</div>
                    <div className="name">{element.gsx$name.$t}</div>
                    {element.gsx$picture.$t != "" ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                </div>
            )
        })
    }
        
    const loading = "loading"

    return(
        <div className="memories section">
            <h2 className="memories">Memories</h2>
            <div className="tile-container">{message}</div>
        </div>
    )
}
export default Memories