import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { UserOutlined, CheckOutlined } from '@ant-design/icons'
import Uploader from './Uploader'
import { $authHost } from '../api/axios-interceptors'
import { useParams, useNavigate } from 'react-router-dom';
import { useActions } from './../hooks/useActions';

const TrackForm: React.FC = () => {
  const {id} = useParams()
  const {addTrack} = useActions()
  const navigate = useNavigate()
  const {TextArea} = Input

  const [name, setName] = useState<string>('')
  const [artist, setArtist] = useState<string>('')
  const [text, setText] = useState<string>('')

  const [uploading, setUploading] = useState<boolean>(false)

  const handleUpload = async (files: any[]) => {
    setUploading(true)
    const imageFile = files.find(f => f.type.includes('image'))
    const audioFile = files.find(f => f.type.includes('audio'))
    const formData = new FormData()

    if (id) {
      formData.append('id', id)
    }
    formData.append('artist', artist)
    formData.append('name', name)
    formData.append('text', text)
    formData.append('picture', imageFile)
    formData.append('audio', audioFile)
    if (id) {
      await $authHost.put('tracks', formData)
    } else {
      addTrack(formData)
      navigate('/tracks')
    }
    
    setUploading(false)
  }

  return (
    <>
      <Form.Item label="Название трека" labelCol={{span: 24}} required>
        <Input 
          placeholder="Название трека" 
          prefix={<CheckOutlined />} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Исполнитель" labelCol={{span: 24}} required>
        <Input 
          placeholder="Исполнитель" 
          prefix={<UserOutlined />} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArtist(e.target.value)}/>
      </Form.Item>
      
      <Form.Item label="Текст песни" labelCol={{span: 24}}>
        <TextArea 
          placeholder="текст песни" 
          allowClear 
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        />
      </Form.Item>

      <Uploader upload={handleUpload} uploading={uploading} isCreate={!!id}/>
    </>
  )
}

export default TrackForm