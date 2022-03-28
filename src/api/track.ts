import { $authHost } from "./axios-interceptors";

export const $getTracks = () => $authHost.get('tracks')
export const $createTrack = (track: any) => $authHost.post('tracks', track)
export const $deleteTrack = (id: string) => $authHost.delete('tracks/' + id)
export const $likeTrack = (trackId: string, username: string) => $authHost.post('tracks/likes', {trackId, username})