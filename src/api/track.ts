import { ITrack } from "../types/track";
import { $authHost } from "./axios-interceptors";


export const $getTracks = () => $authHost.get('tracks')
export const $createTrack = (track: any) => $authHost.post('tracks', track)