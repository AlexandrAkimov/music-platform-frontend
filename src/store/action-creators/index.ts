import * as UserActionCreators from './user'
import * as TrackActionCreators from './track-action'

export const ActionCreators = {
  ...UserActionCreators,
  ...TrackActionCreators
}