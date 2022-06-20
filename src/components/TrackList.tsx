import React, { useEffect, useState } from 'react'
import { List, Avatar } from 'antd';
import { ITrack } from '../types/track'
import { useNavigate } from 'react-router-dom';
import { $api_uri } from '../api/axios-interceptors';
import { useActions } from './../hooks/useActions';
import TrackItem from './TrackItem';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface TrackListProps {
  tracks: ITrack[]
}



const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const [trackId, setTrackId] = useState<string>('null')

  const {deleteTrack, playTrack, pauseTrack} = useActions()
  
  const play = (): void => {
    playTrack()
  }
  const paused = (): void => {
    pauseTrack()
  }
  const remove = (id: string): void => {
    deleteTrack(id)
  }

  console.log('list');
  
    
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
          key={item._id}
          actions={[
            <TrackItem 
              trackId={trackId}
              item={item}
              onPlay={play}
              onPause={paused}
              onRemove={remove}
              changeTrack={setTrackId}
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