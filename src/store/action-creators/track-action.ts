import { Dispatch } from "redux"
import { $createTrack, $deleteTrack, $getTracks, $likeTrack } from "../../api/track"

import { TrackAction, TrackActionTypes } from "../types/track"


export const getTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      dispatch({type: TrackActionTypes.TRACKS})
      const response = await $getTracks()
      console.log(response);
      
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

export const deleteTrack = (id: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      dispatch({type: TrackActionTypes.TRACKS})
      await $deleteTrack(id)
      dispatch({type: TrackActionTypes.TRACK_DELETE, payload: id})
    } catch (error) {
      dispatch({type: TrackActionTypes.TRACKS_ERROR, payload: 'Произошла ошибка при удалении трека'})
    }
  }
}

export const likeTrack = (id: string, username: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      dispatch({type: TrackActionTypes.TRACKS})
      const likes = await $likeTrack(id, username)
      console.log(likes);
      
      dispatch({type: TrackActionTypes.TRACK_LIKE, payload: {id, likes: likes.data}})
    } catch (error) {
      dispatch({type: TrackActionTypes.TRACKS_ERROR, payload: 'Произошла ошибка при удалении трека'})
    }
  }
}
