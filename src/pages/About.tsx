import React, { useEffect } from 'react'
import { $authHost } from '../api/axios-interceptors'
import TrackList from '../components/TrackList'
import { ITrack } from '../types/track'

const About: React.FC = () => {
  const tracks: ITrack[] = [
    {
      _id: '1', 
      name: 'Doroga v rai', 
      artist: 'Mavrin S.', 
      picture: 'http://localhost:5000/image/f9a19f9a-16de-4d9b-b61f-6fb43b793c5f.jpg',
      audio: 'http://localhost:5000/audio/72d47e1f-b4ed-49a6-94a9-d3ca9da5105b.mp3',
      text: 'stranno jit\' i jelat\' umeret\'',
      listens: 0,
      comments: []
    }
  ]
  useEffect(() => {
    $authHost.get('tracks')
  }, [])
  return ( 
    <>
      <h1>My Tracks</h1>
      <TrackList tracks={tracks}/>
    </>
  )
}

export default About