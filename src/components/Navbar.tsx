import React, { useState } from 'react'
import { Button, Drawer, PageHeader } from 'antd'
import { MenuOutlined} from '@ant-design/icons'


const Navbar: React.FC = () => {
  const [isDrawer, setIsDrawer] = useState(false)
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
          background: '#85a5ff'
        }}
        onBack={() => null}
        backIcon={
          <Button 
            onClick={() => setIsDrawer(prev => !prev)}
            style={{background: '#85a5ff', color: '#fff', border: 'none'}} shape="circle" icon={<MenuOutlined />} />}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Drawer
        title="Basic Drawer"
        placement='left'
        closable={false}
        visible={isDrawer}
        onClose={() => setIsDrawer(prev => !prev)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default Navbar