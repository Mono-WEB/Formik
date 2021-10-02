import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography

const wrap = {
  width: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const marg = {
  marginBottom: '10px'
}



function SeccussReg({reg}) {

  const handleSubmit = () => {
    reg(true)
  }

  return (
    <div style={wrap}>
      <Avatar size={64} icon={<UserOutlined />} style={marg}/>
      <Text type="success" style={marg} >Регистрация прошла успешно</Text>
      <Button type="primary" onClick={handleSubmit} >Продолжить</Button>
    </div>
  )
}

export default SeccussReg
