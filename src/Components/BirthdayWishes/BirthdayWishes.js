import React from 'react'
import Fade from 'react-reveal/Fade'
import './BirthdayWishes.scss'

const BirthdayWishes = (props) => {
    // const entries = props.messages.feed.entry

    let message = ''
    if(props.messages.feed.entry[0]) {
        message = props.messages.feed.entry.filter(message => {return message.gsx$type.$t === "Birthday wishes"})
            .map((element, index) => {
                return(
                    <>
                        {element.gsx$picture.$t != "" ? 
                        <Fade right>
                            <div className="tile-with-pic wish-with-pic" key={index}>
                                <div className="message-div">
                                    <p className="message">{element.gsx$message.$t}</p>
                                    <p className="name">{element.gsx$name.$t}</p>
                                </div>
                                <img src={element.gsx$picture.$t} alt="pic"/>
                            </div>
                        </Fade> : 
                        <Fade right>
                            <div className="tile wish" key={index}>
                                <div className="message">{element.gsx$message.$t}</div>
                                <div className="name">{element.gsx$name.$t}</div>
                            </div>
                        </Fade>}
                    </>
                )
            })
    }

    return(
        <div className="wishes section">
            <h2>Birthday Wishes</h2>
            
                <div className="tile-container">{message}</div>
                    
        </div>
    )
}
export default BirthdayWishes