import { combineReducers } from "redux";
import { trackReducer } from "./trackReducer";
import { userReducer } from "./userReducer";
import { playerReducer } from './playerReducer';



export const rootReducer = combineReducers({
  user: userReducer,
  track: trackReducer,
  player: playerReducer
})

export type RootState = ReturnType<typeof rootReducer>