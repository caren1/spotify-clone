import React, { useState, useEffect } from 'react';
import Login from './components/Login'
import Player from './components/Player'
import { getTokenFromUrl } from './spotify'

function App() {

  const [ token, setToken ] = useState(null)

useEffect(() => {
  // get the token from URL
  const hash = getTokenFromUrl()
  // cleared the token from url to hide it
  window.location.hash = ""
  // access token is available within the object that gets returned
  const _token = hash.access_token
  // save the token to the state
  if (_token) setToken(_token)
}, [])


  return (
    <div className="app">
      {token ? <Player /> : <Login /> }
     </div>
  );
}

export default App;
