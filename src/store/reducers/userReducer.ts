import { UserAction, UserActionTypes, UserState } from "../types/user"

const initialState: UserState = {
  token: '',
  loading: false,
  error: null,
  isAuth: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.AUTH_USER:
      return { loading: true, error: null, token: '', isAuth: false }
    case UserActionTypes.AUTH_USER_SUCCESS:
      return { loading: false, error: null, token: action.payload, isAuth: true }
    case UserActionTypes.AUTH_USER_ERROR:
      return { loading: false, error: action.payload, token: '', isAuth: false }
    default:
      return state
  }
}