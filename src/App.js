import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateValue } from './StateProvider'

import Login from './components/Login'
import Player from './components/Player'

import { getTokenFromUrl } from './spotify'

// instance of object that is going to be refered to for interaction with spotify
const spotify = new SpotifyWebApi()

/* DATA LAYER : in order to avoid a phenomenon caled a prop drilling (bascially, passing specific
  data deeper into the components = which is a sign for a badly written code) we can use
  things as Redux or ContextAPI, in order to be able to get or update the data wherever within our application
  at any time */

function App() {

  const [ token, setToken ] = useState(null)
  const [ { user }, dispatch ] = useStateValue()

useEffect(() => {
  // get the token from URL
  const hash = getTokenFromUrl()
  // cleared the token from url to hide it
  window.location.hash = ""
  // access token is available within the object that gets returned
  const _token = hash.access_token
  // save the token to the state
  if (_token) {
    setToken(_token)
    // giving an acess to spotify api, based on created token
    spotify.setAccessToken(_token)
    spotify.getMe()
    .then((user) => 
      dispatch({ 
        type: 'SET_USER', user
      }))
  }
}, [])

  return (
    <div className="app">
      {token ? <Player /> : <Login /> }
     </div>
  );
}

export default App;
