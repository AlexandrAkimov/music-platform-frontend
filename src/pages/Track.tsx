import React from 'react'
import { Card, Col, Row} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TrackForm from '../components/TrackForm'
import { $api_uri } from '../api/axios-interceptors'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from './../hooks/useTypedSelector';

const Track: React.FC = () => {
  const tracks = useTypedSelector(state => state.track.tracks)
  const { Meta } = Card
  const {id} = useParams()
  const track = tracks.find(track => track._id === id)!
  return (
    <Row gutter={[16, 16]}>
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <Card

          cover={
            <img
              alt="example"
              src={$api_uri + track?.picture}
            />
          }
          actions={[
            <EditOutlined key="edit" />,
            <DeleteOutlined key="delete" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description. Lorem1 sfdlsdj slfkj sdlkjf lkjf  slkdfj lskfj sdf lsjfdl sdlkfj slkdfj lksjf"
          />
        </Card>
      </Col>
      <Col span={8} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <TrackForm track={track}/>
      </Col>
    </Row>
  )
}

export default Track