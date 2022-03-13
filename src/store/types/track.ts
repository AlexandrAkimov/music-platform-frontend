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
  TRACK_DELETE = 'TRACK_DELETE'
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

export type TrackAction = TracksAction | TracksSuccessAction | TracksErrorAction | TrackGetOneAction | TrackDeleteAction | TrackCreateAction | TrackUpdateAction