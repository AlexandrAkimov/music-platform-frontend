import { TrackState, TrackAction, TrackActionTypes } from "../types/track"

const initialState: TrackState = {
  tracks: [],
  track: {
    _id: '',
    name: '',
    artist: '',
    listens: 0,
    text: '',
    picture: '',
    audio: '',
    likes: 0,
    comments: []
  },
  loading: false,
  error: null
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
  switch (action.type) {
    case TrackActionTypes.TRACKS:
      return { loading: true, error: null, tracks: [], track: initialState.track }
    case TrackActionTypes.TRACKS_SUCCESS:
      return { loading: false, error: null, tracks: action.payload, track: initialState.track }
    case TrackActionTypes.TRACKS_ERROR:
      return { loading: false, error: action.payload, tracks: [], track: initialState.track }
    case TrackActionTypes.TRACK_GET_ONE:
      return { ...state, loading: false, error: null, track: action.payload }
    case TrackActionTypes.TRACK_CREATE:
      return { loading: false, error: null, track: initialState.track, tracks: [...state.tracks, action.payload] }
    case TrackActionTypes.TRACK_DELETE:
      return { loading: false, error: null, track: initialState.track, tracks: state.tracks.filter(track => track._id !== action.payload) }
    case TrackActionTypes.TRACK_UPDATE:
      return { loading: false, error: null, track: initialState.track, tracks: state.tracks.map(track => {
        if (track._id === action.payload._id) return action.payload;
        return track
      }) 
    }
    default:
      return state
  }
}