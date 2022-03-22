import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Player from '../components/Player';

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)


  const toggle = () => {
    setCollapsed(prev => !prev)
  };


  return (
      <Layout style={{ height: '100vh' }}>
        <Sider theme='dark' trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={'/'}>Главная</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={'/tracks'}>Список треков</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />}>
              <Link to={'/track/create'}>Создать трек</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 15px' }}>
            {collapsed ? <MenuUnfoldOutlined onClick={toggle} style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} onClick={toggle} />}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
            
          </Content>
         
        </Layout>
        <Player />
      </Layout>

  );

}

export default MainLayout