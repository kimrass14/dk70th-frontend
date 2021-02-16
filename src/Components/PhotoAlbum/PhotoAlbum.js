import React from 'react'
import Fade from 'react-reveal/Fade'
import './PhotoAlbum.scss'

const PhotoAlbum = (props) => {
    const entries = props.messages.feed.entry
        
    let message = ''
    if(entries[0]) {
        message = entries.filter(message => {return message.gsx$type.$t === "Photo"})
        .map((element, index) => {
            return(
                <>
                    <Fade right>
                        <img src={element.gsx$picture.$t} alt="pic" key={index}/>
                    </Fade>
                </>
            )
        })
    }
        
    const loading = "loading"

    return(
        <div className="photo-album section">
            <h2 className="photo-album">More photos</h2>
            <div className="tile-container">{message}</div>
        </div>
    )
}
export default PhotoAlbum