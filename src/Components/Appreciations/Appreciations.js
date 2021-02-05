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
                        <div>{element.gsx$message.$t}</div>
                        <div>{element.gsx$name.$t}</div>
                        {element.gsx$picture.$t != '' ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                    </div>
                )
            })
    }

    return(
        <div className="appreciations section">
            <div>Appreciations</div>
            {appreciate}
        </div>
    )
}
export default Appreciations