export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: 'BQBE3ou-D2htfa9A-tw0Oh3AuM-q0-lIFqeKebYX6aP4PvalNxvz9NixuV3rxJUEj0zHbnTQaDXHhQzqmG9KxucQBUkh4l0HsmxqvnCuxeRH6_WRt3gvu_MO5G3MG5BAQzb3ex0UJ35I-LKudUMaklNCMu1THruI',
    // token: null,
  }
  
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER" :
         return { ...state, user: action.user }

        case "SET_TOKEN" :
         return { ...state, token: action.token }

        case "SET_PLAYLISTS" :
          return { ...state, playlists: action.playlists }

        default:
         return state
    }
}

export default reducer