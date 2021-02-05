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
                        <div>{element.gsx$message.$t}</div>
                        <div>{element.gsx$name.$t}</div>
                        {element.gsx$picture.$t != "" ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                    </div>
                )
            })
    }

    return(
        <div className="wishes section">
            <div>BirthdayWishes</div>
            {message}        
        </div>
    )
}
export default BirthdayWishes