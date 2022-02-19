import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from './../hooks/useActions';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  isLogin: boolean
}

const Login: React.FC<LoginProps> = ({isLogin}) => {

  const navigate = useNavigate()
  const {loading} = useTypedSelector(state => state.user)
  const {authUser} = useActions() 
  const onFinish = async (values: any) => {
    await authUser(values, isLogin)
    navigate('/')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Ваше Имя"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите ваше Имя' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, min: 6, message: 'Пожалуйста, введите ваш пароль (не менее 6 символов)' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login