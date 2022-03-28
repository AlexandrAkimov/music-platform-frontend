import { UserAction, UserActionTypes, UserState } from "../types/user"

const initialState: UserState = {
  token: '',
  loading: false,
  error: null,
  isAuth: false,
  username: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.AUTH_USER:
      return { loading: true, error: null, token: '', isAuth: false, username: '' }
    case UserActionTypes.AUTH_USER_SUCCESS:
      return { loading: false, error: null, token: action.payload, isAuth: true, username: '' }
    case UserActionTypes.AUTH_USER_SET_USERNAME:
      return { ...state, loading: false, error: null, isAuth: true, username: action.payload }
    case UserActionTypes.AUTH_USER_ERROR:
      return { loading: false, error: action.payload, token: '', isAuth: false, username: '' }
    default:
      return state
  }
}