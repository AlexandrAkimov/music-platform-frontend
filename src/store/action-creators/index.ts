import * as UserActionCreators from './user'
import * as TrackActionCreators from './track-action'
import * as PlayerActionCreators from './player-action'

export const ActionCreators = {
  ...UserActionCreators,
  ...TrackActionCreators,
  ...PlayerActionCreators
}