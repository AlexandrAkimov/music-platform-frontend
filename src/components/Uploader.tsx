import { Button, message, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

interface UploaderProps {
  upload: (fileList: any[]) => void
  uploading: boolean
  isCreate: boolean
}

const Uploader: React.FC<UploaderProps> = ({ upload, uploading, isCreate }) => {
  const btnLabel = !isCreate ? 'Создать' : 'Сохранить'
  const [fileList, setFileList] = useState<Array<any>>([])

  const onRemove = (file: any) => {
    const index: number = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1)
    setFileList(newFileList)

  }
  const beforeUpload = (file: any): boolean => {
    const isJpgOrPngOrMp3 = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'audio/mpeg';

    if (fileList.some(f => f.type.includes(file.type.split('/')[0]))) {
      message.error('Вы уже загрузили файл такого формата')
      return false
    }

    if (!isJpgOrPngOrMp3) {
      message.error('Загружаемый файл должен быть формата аудио или картинки')
    } else {
      setFileList([...fileList, file])
    }

    return false;
  }

  return (
    <>
      <Upload onRemove={onRemove} beforeUpload={beforeUpload} fileList={fileList} >
        <Button disabled={fileList.length > 1} icon={<UploadOutlined />}>Выберите аудио и картинку</Button>
      </Upload>
      <Button
        type="primary"
        onClick={() => upload(fileList)}
        disabled={fileList.length < 2}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Загрузка' : btnLabel}
      </Button>
    </>
  )
}

export default Uploader