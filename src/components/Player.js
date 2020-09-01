import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

// Draft for the player page
// 1 - Sidebar
// 2 - Body
// 3 - Footer

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player
