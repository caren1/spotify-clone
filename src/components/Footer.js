import React from 'react'
import './Footer.css'

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";


function Footer() {
    return (
        <div className="footer">

            {/* Album and song details  */}
            <div className="footer__left">
                <p>left</p>
            </div>

            {/* Player controls */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSie="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            {/* Volume controls */}
            <div className="footer__right">
                <p>right</p>
            </div>
        </div>
    )
}

export default Footer
