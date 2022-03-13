import { combineReducers } from "redux";
import { trackReducer } from "./trackReducer";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
  user: userReducer,
  track: trackReducer
})

export type RootState = ReturnType<typeof rootReducer>