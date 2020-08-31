import React from 'react'
import './Login.css'

import { accessUrl } from '../spotify'

// Draft for the application login page
// 1 - Spotify Logo
// 2 - Login with spotify button (login taken from spotify.js containing configuration for spotify api)

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <a href={accessUrl}>Login with spotify</a>
        </div>
    )
}

export default Login
