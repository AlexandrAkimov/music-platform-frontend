import { FC, useEffect, useState } from "react";
import { PlayCircleOutlined, LikeOutlined, MessageOutlined, DeleteOutlined, EditOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { ITrack } from "../types/track";

interface TrackItemProps {
  isActive: boolean
  item: ITrack
  onPlay: (item: ITrack) => void,
  onPause: () => void,
  onRemove: (id: string) => void
}

interface IconTextProps {
  text?: string | number;
}
const TrackItem: FC<TrackItemProps> = ({item, isActive, onPlay, onPause, onRemove}) => {
  const [active, setActive] = useState<boolean>(false);

  const play = (e: React.MouseEvent) => {
    console.log('click play');
    
    e.stopPropagation()
    setActive(true)
    onPlay(item)
  }

  const pause = (e: React.MouseEvent) => {
    console.log('click pause');
    e.stopPropagation()
    setActive(false)
    onPause()
  }

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove(item._id)
  }

  const IconText: React.FC<IconTextProps> = ({ text, children }) => (
    <span className='item-action-list'>
      <span style={{ marginRight: text ? 8 : 0 }}>
        {children}
      </span>
      {text}
    </span>
  );
  return (
    <>
      {!active ? 
        <IconText key="list-vertical-star-o" >
          <PlayCircleOutlined onClick={(e) => play(e)}/>
        </IconText>
        : <IconText key="list-vertical-star-o" >
            <PauseCircleOutlined onClick={(e) => pause(e)} />
          </IconText>
      }
      
      <IconText text="0" key="list-vertical-like-o">
        <LikeOutlined />
      </IconText>
      <IconText text={`${item.comments.length}`} key="list-vertical-message">
        <MessageOutlined />
      </IconText>
      <IconText key="list-vertical-edit">
        <EditOutlined />
      </IconText>
      <IconText key="list-vertical-delete">
        <DeleteOutlined onClick={(e) => remove(e)} />
      </IconText>
    </>
  )
}

export default TrackItem