import React, {useState} from 'react'
import './Memories.scss'

const Memories = (props) => {

    const [memories, setMemories] = useState()
        
        const memory = () => {
            const entry = props.messages.feed.entry
            entry.map((element, index) => {
                return(
                    <div index={index}>
                        <div>something</div>
                        <div>{element.gsx$name.$t}</div>
                    </div>
                )
            })
        }
   

    return(
        <>
            <div className="memories">Memories</div>
            {props.messages.feed.entry[0] ? memory(): null}
        </>
    )
}
export default Memories