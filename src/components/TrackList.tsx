import React from 'react'
import { List, Avatar } from 'antd';
import { PlayCircleOutlined, LikeOutlined, MessageOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ITrack } from '../types/track'

interface TrackListProps {
  tracks: ITrack[]
}

interface IconTextProps {
  text?: string | number;
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {

  const IconText: React.FC<IconTextProps> = ({ text, children }) => (
    <span className='item-action-list'>
      <span style={{ marginRight: text ? 8 : 0 }}>
        {children}
      </span>
      {text}
    </span>
  );

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
          key={item._id}
          actions={[
            <IconText key="list-vertical-star-o">
              <PlayCircleOutlined />
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
            avatar={<Avatar src={item.picture} />}
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