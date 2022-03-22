import React from 'react'
import { List, Avatar } from 'antd';
import { ITrack } from '../types/track'
import { useNavigate } from 'react-router-dom';
import { $api_uri } from '../api/axios-interceptors';
import { useActions } from './../hooks/useActions';
import TrackItem from './TrackItem';
import { useTypedSelector } from './../hooks/useTypedSelector';

interface TrackListProps {
  tracks: ITrack[]
}



const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const {deleteTrack, setActiveTrack, playTrack, pauseTrack} = useActions()
  const {pause} = useTypedSelector(state => state.player)
  const navigate = useNavigate()
  

  const play = (track: ITrack): void => {
    setActiveTrack(track)
    playTrack()
  }
  const paused = (): void => {
    pauseTrack()
  }
  const remove = (id: string): void => {
    deleteTrack(id)
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={tracks}
      renderItem={item => (
        <List.Item
          onClick={() => navigate('/track/' + item._id)}
          key={item._id}
          actions={[
            <TrackItem 
              isActive={pause}
              item={item}
              onPlay={play}
              onPause={paused}
              onRemove={remove}
            />
          ]}
          
        >
          <List.Item.Meta
            avatar={<Avatar src={`${$api_uri + item.picture}`} size={50}/>}
            title={<span>{item.name}</span>}
            description={item.text}
          />
          {item.artist}
        </List.Item>
      )}
    />
  )
}

export default TrackList