export interface UserState {
  token: string;
  loading: boolean;
  error: string | null,
  isAuth: boolean
}

export enum UserActionTypes {
  AUTH_USER = 'AUTH_USER',
  AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
  AUTH_USER_ERROR = 'AUTH_USER_ERROR',
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

export type UserAction = AuthUserAction | AuthUserSuccessAction | AuthUserErrorAction