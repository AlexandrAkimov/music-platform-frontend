import { Card } from 'antd';
import React, { useState } from 'react'
import Login from './Login';

const Auth: React.FC = () => {

  const tabList = [
    {
      key: 'tab1',
      tab: 'Войти',
    },
    {
      key: 'tab2',
      tab: 'Зарегистрироваться',
    },
  ];

  const contentList = {
    tab1: <Login isLogin={true} />,
    tab2: <Login isLogin={false} />,
  };

  const [state, setState] = useState('tab1')

  return (
    <div style={{minWidth: '30%'}}>
      <Card
        style={{ width: '100%' }}
        title="Регистрация"
        tabList={tabList}
        activeTabKey={state}
        onTabChange={setState}
      >
        {(contentList as any)[state]}
      </Card>
    </div>
  )
}

export default Auth