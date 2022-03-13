import { Dispatch } from "redux"
import { $isAuthenticated, $login, $registration } from "../../api/auth"

import { UserInput } from "../../types/user"
import { UserAction, UserActionTypes } from "../types/user"

export const authUser = (payload: UserInput, isLogin: boolean) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.AUTH_USER})
      const response = isLogin ? await $login(payload) : await $registration(payload)
      dispatch({type: UserActionTypes.AUTH_USER_SUCCESS, payload: response.data.access_token})
      localStorage.token = response.data.access_token
    } catch (e) {
      dispatch({type: UserActionTypes.AUTH_USER_ERROR, payload: 'Произошла ошибка при логине'})
    }
  }
}

export const checkAuth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await $isAuthenticated()
      dispatch({type: UserActionTypes.AUTH_USER_SUCCESS, payload: response.data.access_token})
    } catch (error) {
      dispatch({type: UserActionTypes.AUTH_USER_ERROR, payload: 'Произошла ошибка при логине'})
    }
  }
}