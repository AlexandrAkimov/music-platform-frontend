import { FC, useState } from "react";
import { PlayCircleOutlined, LikeOutlined, MessageOutlined, DeleteOutlined, EditOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { ITrack } from "../types/track";
import { useActions } from './../hooks/useActions';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";


interface TrackItemProps {
  isPaused: boolean
  trackId: string
  item: ITrack
  onPlay: (item: ITrack) => void
  onPause: () => void
  onRemove: (id: string) => void
  changeTrack: (id: string) => void
}

interface IconTextProps {
  text?: string | number;
}
const IconText: React.FC<IconTextProps> = ({ text, children }) => (
  <span className='item-action-list'>
    <span style={{ marginRight: text ? 8 : 0 }}>
      {children}
    </span>
    {text}
  </span>
);

const TrackItem: FC<TrackItemProps> = ({item, trackId, isPaused, changeTrack, onPlay, onPause, onRemove}) => {

  const [active, setActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {likeTrack} = useActions()
  const {username} = useTypedSelector(state => state.user)
  const navigate = useNavigate()

  const play = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setActive(true)
    changeTrack(id)
    onPlay(item)
  }

  const pause = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActive(false)
    onPause()
  }

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove(item._id)
  }

  const like = (e: React.MouseEvent) => {
    e.stopPropagation()
    likeTrack(item._id, username)
  }

  const handleOk = () => {

  }

  return (
    <>
      {!active || item._id !== trackId || isPaused ? 
        <IconText key="list-vertical-star-o" >

          <PlayCircleOutlined onClick={(e) => play(e, item._id)}/>
        </IconText>
        : <IconText key="list-vertical-star-o" >
            <PauseCircleOutlined onClick={(e) => pause(e)} />
          </IconText>
      }
      
      <IconText text={`${item.likes.length}`} key="list-vertical-like-o">
        <LikeOutlined onClick={like} />
      </IconText>
      <IconText text={`${item.comments.length}`} key="list-vertical-message">
        <MessageOutlined onClick={() => setIsModalVisible(prev => !prev)}/>
      </IconText>
      <IconText key="list-vertical-edit">
        <EditOutlined onClick={() => navigate('/track/' + item._id)}/>
      </IconText>
      <IconText key="list-vertical-delete">
        <DeleteOutlined onClick={(e) => remove(e)} />
      </IconText>
      <Modal title="Добавить комментарий" visible={isModalVisible} onOk={handleOk} onCancel={() => setIsModalVisible(false)} destroyOnClose>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default TrackItem