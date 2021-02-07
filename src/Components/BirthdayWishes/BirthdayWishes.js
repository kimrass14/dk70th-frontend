import React, {useState} from 'react'
import './BirthdayWishes.scss'

const BirthdayWishes = (props) => {
    const entries = props.messages.feed.entry

    let message = ''
    if(entries[0]) {
        message = entries.filter(message => {return message.gsx$type.$t === "Birthday wishes"})
            .map((element, index) => {
                return(
                    <div className="tile wish" key={index}>
                        <div className="message">{element.gsx$message.$t}</div>
                        <div className="name">{element.gsx$name.$t}</div>
                        {element.gsx$picture.$t != "" ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                    </div>
                )
            })
    }

    return(
        <div className="wishes section">
            <h2>BirthdayWishes</h2>
            <div className="tile-container">{message}</div>        
        </div>
    )
}
export default BirthdayWishes