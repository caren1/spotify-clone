// https://developer.spotify.com/documentation/web-playback-sdk-quick-start/#
// endpoint -> wherever we'll send our user

// authentication end point
// click login btn -> redirected to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize"

// redirect end point
// as soon as we are logged in, we are redirected to localhost in order to test locally, have to change to localhost
// const redirectUri = "http://localhost:3000/"
const redirectUri = "https://spotify-clone-wojt.web.app"

// individual id from spotify from developers
const clientId = "afe5772f056d4ca989a8079e0037be7b"

// scopes from spotify api; what is going to be shown 
// what are the functionalities we use from spotify
// allows for permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ]

  // method that will allow to get the token for successful login from the response URL
  export const getTokenFromUrl = () => {
      return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
          // #accessToken=mysupercerectkey&name=sonny
          let parts = item.split('=')
          // go to initia array that is being returned and for access token
          // decode the uri component and return initial
          initial[parts[0]] = decodeURIComponent(parts[1])
          return initial
      }, {})
  }

  // accessUrl containing all the above data in order to go to spotify login
  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`