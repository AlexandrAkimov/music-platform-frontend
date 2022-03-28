export interface UserState {
  token: string;
  loading: boolean;
  error: string | null,
  isAuth: boolean,
  username: string
}

export enum UserActionTypes {
  AUTH_USER = 'AUTH_USER',
  AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
  AUTH_USER_ERROR = 'AUTH_USER_ERROR',
  AUTH_USER_SET_USERNAME = 'AUTH_USER_SET_USERNAME'
}

interface AuthUserAction {
  type: UserActionTypes.AUTH_USER
}

interface AuthUserSuccessAction {
  type: UserActionTypes.AUTH_USER_SUCCESS;
  payload: string
}

interface AuthUserErrorAction {
  type: UserActionTypes.AUTH_USER_ERROR;
  payload: string
}

interface AuthUserSetUsername {
  type: UserActionTypes.AUTH_USER_SET_USERNAME;
  payload: string
}

export type UserAction = AuthUserAction | AuthUserSuccessAction | AuthUserErrorAction | AuthUserSetUsername