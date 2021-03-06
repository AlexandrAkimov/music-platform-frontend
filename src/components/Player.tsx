import React, { FC, useEffect } from 'react'
import { PlayCircleOutlined, PauseCircleOutlined, SoundOutlined } from '@ant-design/icons';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';
import { $api_uri } from '../api/axios-interceptors';

let audio = new Audio();
const Player: FC = () => {
  
  const { active, currentTime, volume, duration, pause } = useTypedSelector(state => state.player)
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()

  const play = () => {
    playTrack()
    audio.play()
  }

  const paused = () => {
    pauseTrack()
    audio.pause()
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  useEffect(() => {
    if (audio) {
      setAudio()
    }
  }, [active])

  useEffect(() => {
    if (audio) {
      pause ? audio.pause() : audio.play() 
    }
  }, [pause, active])

  const setAudio = () => {
    if (active) {
      audio.src = $api_uri + active.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
      play()
    }
  }

  const formatTime = (second: number): string => {
    const min = Math.floor(second / 60) < 10 ? '0' + Math.floor(second / 60) :  Math.floor(second / 60)
    const sec = second % 60 < 10 ? '0' + second % 60 : second % 60
    return min + ' : ' + sec
  }

  return (
    <div className='player' style={{display: active ? 'flex' : 'none'}}>
      <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
        {pause ?
          <PlayCircleOutlined style={{ color: '#fff', cursor: 'pointer', fontSize: '20px' }} onClick={play} /> :
          <PauseCircleOutlined style={{ color: '#fff', cursor: 'pointer', fontSize: '20px' }} onClick={paused} />
        }
        <div style={{ width: 'auto', marginLeft: 10 }}>
          <span style={{ whiteSpace: 'nowrap' }}>{active?.name}</span>
          <div><small style={{ whiteSpace: 'nowrap', color: '#eee' }}>{active?.artist}</small></div>
        </div>
        <TrackProgress 
          left={currentTime} 
          right={duration}
          showLeft={formatTime(currentTime)} 
          showRight={formatTime(duration)}
          onChange={changeCurrentTime} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '20%', marginLeft: 40 }}>
        <SoundOutlined style={{ color: '#fff', cursor: 'pointer', fontSize: '20px', marginLeft: 10 }} />
        <TrackProgress left={volume} right={100} onChange={changeVolume} />
      </div>

    </div>
  )
}

export default Player