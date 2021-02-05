import React, {useState} from 'react'
import './Memories.scss'

const Memories = (props) => {

    const [memories, setMemories] = useState()
        
    let entry = ''
    if(props.messages.feed.entry[0]) {
        entry = props.messages.feed.entry.filter(message => {return message.gsx$type.$t === "Favorite memory"})
        .map((element, index) => {
            return(
                <div className="tile memory" key={index}>
                    <div>{element.gsx$name.$t}</div>
                    <div>{element.gsx$message.$t}</div>
                    {element.gsx$picture.$t != "" ? <img src={element.gsx$picture.$t} alt="pic"/> : null}
                </div>
            )
        })
    }
        
    const loading = "loading"

    return(
        <>
            <div className="memories">Memories</div>
            {entry}
        </>
    )
}
export default Memories