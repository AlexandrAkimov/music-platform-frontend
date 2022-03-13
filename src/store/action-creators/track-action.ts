import { Dispatch } from "redux"
import { $createTrack, $getTracks } from "../../api/track"

import { ITrack } from "../../types/track"
import { TrackAction, TrackActionTypes } from "../types/track"


export const getTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      dispatch({type: TrackActionTypes.TRACKS})
      const response = await $getTracks()
      dispatch({type: TrackActionTypes.TRACKS_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: TrackActionTypes.TRACKS_ERROR, payload: 'Произошла ошибка при загрузке списка треков'})
    }
  }
}

export const addTrack = (track: any) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      dispatch({type: TrackActionTypes.TRACKS})
      const response = await $createTrack(track)
      dispatch({type: TrackActionTypes.TRACK_CREATE, payload: response.data})
    } catch (error) {
      dispatch({type: TrackActionTypes.TRACKS_ERROR, payload: 'Произошла ошибка при создании трека'})
    }
  }
}
