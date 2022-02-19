import { Dispatch } from "redux"
import { $authHost, $host } from "../../api/axios-interceptors"
import { UserInput } from "../../types/user"
import { UserAction, UserActionTypes } from "../types/user"

export const authUser = (payload: UserInput, isLogin: boolean) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.AUTH_USER})
      const response = await $host.post(`http://localhost:5000/auth/${isLogin ? 'login' : 'registration'}`, payload)
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
      const response = await $authHost.get('http://localhost:5000/auth')
      dispatch({type: UserActionTypes.AUTH_USER_SUCCESS, payload: response.data.access_token})
    } catch (error) {
      dispatch({type: UserActionTypes.AUTH_USER_ERROR, payload: 'Произошла ошибка при логине'})
    }
    
  }
}