import React from 'react'
import Zoom from 'react-reveal/Zoom'
import './ForYou.scss'

const ForYou = () => {

    return(
        <div className="forYou section">
            <h2>To the....</h2>
            <p><span className="role">WIFE</span> so devoted that finally got her husband to eat and love cheesecake</p>
            <p><span className="role">MOTHER</span> that leads by example with the fullest of hearts</p>
            <p><span className="role">SISTER</span> that stands unwavering at her sisters' side</p>
            <p><span className="role">DAUGHTER</span> that cooks like her mother and creates with her hands like her father</p>
            <p><span className="role">AUNT</span> with the greatest admiration of her nieces and nephews</p>
            <p><span className="role">GRANDMA</span> that teaches (litterally) and so playful</p>
            <p><span className="role">FRIEND</span> that exemplifies the truest definition of the word</p>
            <p><span className="role">TEACHER</span> so impressionable she continues to inspire students she taught decades ago</p> 
            <p><span className="role">EVERYTHING</span> else in between that you are:</p>
            <Zoom right cascade><h2 className="love-you">WE LOVE YOU!</h2></Zoom>
        </div>
    )
}
export default ForYou