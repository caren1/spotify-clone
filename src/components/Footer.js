import React from 'react'
import './Footer.css'

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";


function Footer() {
    return (
        <div className="footer">

            {/* Album and song details  */}
            <div className="footer__left">
                <img src="https://i.ytimg.com/vi/Ul8OAKt2z28/hqdefault.jpg" alt="" className="footer__albumLogo"/>
                <div class="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            {/* Player controls */}
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            {/* Volume controls */}
            <div className="footer__right">
                <PlaylistPlayIcon />
                <VolumeDownIcon />
                <div class="footer__rightSlider">
                    <Slider />
                </div>  
            </div>
        </div>
    )
}

export default Footer
