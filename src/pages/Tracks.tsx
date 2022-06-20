import React, { useEffect } from 'react'
import TrackList from '../components/TrackList'
import { useActions } from './../hooks/useActions';
import { useTypedSelector } from './../hooks/useTypedSelector';

const Tracks: React.FC = () => {
  const {tracks, error, loading} = useTypedSelector(state => state.track)
  const {getTracks} = useActions()
  useEffect(() => {
    getTracks()
  }, [])
  
  return ( 
    <>
      <h1>My Tracks</h1>
      {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : <TrackList tracks={tracks}/>}
    </>
  )
}

export default Tracks