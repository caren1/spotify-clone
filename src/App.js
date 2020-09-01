import React, { useEffect } from 'react';
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

  const [{ user, token }, dispatch ] = useStateValue()

useEffect(() => {
  // get the token from URL
  const hash = getTokenFromUrl()
  // cleared the token from url to hide it
  window.location.hash = ""
  // access token is available within the object that gets returned
  const _token = hash.access_token
  // save the token to the state
  if (_token) {
    // saving token to the state
    dispatch({ type: 'SET_TOKEN', token: _token })

    // giving an acess to spotify api, based on created token
    spotify.setAccessToken(_token)
    // saving logged in user to state
    spotify.getMe()
    .then((user) => 
      dispatch({ 
        type: 'SET_USER', user
      }))

    // saving user's playlists to state
    spotify.getUserPlaylists()
    .then((playlists) => 
      dispatch({
        type: 'SET_PLAYLISTS', playlists
      }))

    spotify.getPlaylist('37i9dQZEVXcEOzwpZefbcG')
    .then((playlist) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY', discover_weekly: playlist
      })
    })
  }
}, [])

  return (
    <div className="app">
      {/* passing the spotify as a props for investigating two methods */}
      {token ? <Player spotiy={spotify}/> : <Login /> }
     </div>
  );
}

export default App;
