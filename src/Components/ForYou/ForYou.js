import React from 'react'
import Zoom from 'react-reveal/Zoom'
import './ForYou.scss'
import elonVideo from './from-elon.mp4'
import pittsburghVideo from './from-pittsburgh.mp4'

const ForYou = () => {

    return(
        <div className="forYou section">
            <div>
                <h2>To the....</h2>
                <p><span className="role">WIFE</span> so devoted she finally got her husband to eat and love cheesecake</p>
                <p><span className="role">MOTHER</span> that leads by example with the fullest of hearts</p>
                <p><span className="role">SISTER</span> that stands unwavering at their side</p>
                <p><span className="role">DAUGHTER</span> that cooks like her mother and creates with her hands like her father</p>
                <p><span className="role">AUNT</span> with the greatest admiration of her nieces and nephews</p>
                <p><span className="role">GRANDMA</span> that teaches (literally) curriculum and compassion</p>
                <p><span className="role">FRIEND</span> that exemplifies the truest definition of the word</p>
                <p><span className="role">TEACHER</span> so impressionable she continues to inspire students she taught decades ago</p> 
                <p>and <span className="role">EVERYTHING</span> else in between that you are</p>
                <Zoom right cascade><h2 className="love-you">WE LOVE YOU!</h2></Zoom>
            </div>
            <div className="videos-div">
                <video src={elonVideo} controls controlsList="nodownload" disablePictureInPicture className="elon-vid">Your browser does not support this video. Please switch to a different browser</video>
                <video src={pittsburghVideo} controls controlsList="nodownload" disablePictureInPicture className="pittsburgh-vid">Your browser does not support this video. Please switch to a different browser</video>

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/amJlPz4T0sA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                {/* <iframe src="https://player.vimeo.com/video/510879737" width="640" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://player.vimeo.com/video/510889600" width="640" height="361" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
            </div>
        </div>
    )
}
export default ForYou