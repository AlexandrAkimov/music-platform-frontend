import React from 'react'
import { List, Avatar } from 'antd';
import { PlayCircleOutlined, LikeOutlined, MessageOutlined, DeleteOutlined, EditOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { ITrack } from '../types/track'
import { useNavigate } from 'react-router-dom';
import { $api_uri } from '../api/axios-interceptors';

interface TrackListProps {
  tracks: ITrack[]
  active?: boolean
}

interface IconTextProps {
  text?: string | number;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, active }) => {

  const navigate = useNavigate()
  const IconText: React.FC<IconTextProps> = ({ text, children }) => (
    <span className='item-action-list'>
      <span style={{ marginRight: text ? 8 : 0 }}>
        {children}
      </span>
      {text}
    </span>
  );

  const play = (e: any): void => {
    e.stopPropagation();
  }
  const pause = (e: any): void => {
    e.stopPropagation()
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={tracks}
      renderItem={item => (
        <List.Item
          onClick={() => navigate('/track/' + item._id)}
          key={item._id}
          actions={[
            <IconText key="list-vertical-star-o">
              {!active ? <PlayCircleOutlined onClick={play}/> : <PauseCircleOutlined onClick={pause}/>}
            </IconText>,
            <IconText text="0" key="list-vertical-like-o">
              <LikeOutlined />
            </IconText>,
            <IconText text={`${item.comments.length}`} key="list-vertical-message">
              <MessageOutlined />
            </IconText>,
            <IconText key="list-vertical-edit">
              <EditOutlined />
            </IconText>,
            <IconText key="list-vertical-delete">
              <DeleteOutlined />
            </IconText>
          ]}
          extra={
            <></>
          }
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