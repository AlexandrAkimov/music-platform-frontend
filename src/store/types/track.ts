import { ITrack } from "../../types/track";

export interface TrackState {
  tracks: ITrack[];
  track: ITrack
  loading: boolean;
  error: string | null,
}

export enum TrackActionTypes {
  TRACKS = 'TRACKS',
  TRACKS_SUCCESS = 'TRACKS_SUCCESS',
  TRACKS_ERROR = 'TRACKS_ERROR',
  TRACK_GET_ONE = 'TRACK_GET_ONE',
  TRACK_CREATE = 'TRACK_CREATE',
  TRACK_UPDATE = 'TRACK_UPDATE',
  TRACK_DELETE = 'TRACK_DELETE',
  TRACK_LIKE = 'TRACK_LIKE'
}

interface LikeType {
  id: string
  likes: Array<string>
}

interface TracksAction {
  type: TrackActionTypes.TRACKS
}

interface TracksSuccessAction {
  type: TrackActionTypes.TRACKS_SUCCESS;
  payload: ITrack[]
}

interface TracksErrorAction {
  type: TrackActionTypes.TRACKS_ERROR;
  payload: string
}

interface TrackGetOneAction {
  type: TrackActionTypes.TRACK_GET_ONE;
  payload: ITrack
}

interface TrackDeleteAction {
  type: TrackActionTypes.TRACK_DELETE;
  payload: string
}

interface TrackCreateAction {
  type: TrackActionTypes.TRACK_CREATE;
  payload: ITrack
}

interface TrackUpdateAction {
  type: TrackActionTypes.TRACK_UPDATE;
  payload: ITrack
}

interface TrackLikeAction {
  type: TrackActionTypes.TRACK_LIKE;
  payload: LikeType
}

export type TrackAction = TracksAction | TracksSuccessAction | TracksErrorAction | TrackGetOneAction | TrackDeleteAction | TrackCreateAction | TrackUpdateAction | TrackLikeAction