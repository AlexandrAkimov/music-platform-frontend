import { $authHost, $host } from "./axios-interceptors";
import { UserInput } from './../types/user';

export const $login = (user: UserInput) => $host.post('login', user)
export const $registration = (user: UserInput) => $host.post('registration', user)
export const $isAuthenticated = () => $authHost.get('auth')