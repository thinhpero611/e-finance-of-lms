import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Checkbox, Button, Typography, Alert } from 'antd'
import Text from 'antd/lib/typography/Text';
import { setupMaster } from 'cluster';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from "../../../core/firebase"
import "./style.scss";

interface user { 
  email: string
  password: string
}

const Login = () => {
  const [ user, setUser ] = useState<user>({ email: '', password: ''})
  const [ error, setError ] = useState(false)
  
  const handleFormChange = (current: any, values: any ) => {
    setUser({ email: values.usermail, password: values.password })
  }

  const handleLogin = async (e: any) => {
    e.preventDefault()
    console.log(user)
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password)
    } catch {
      setError(true)
      //error
    }
  }

  return (
    <>
    <Typography.Title className="auth-main-title" level={1}>Đăng nhập</Typography.Title>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onValuesChange={handleFormChange}
      >
      <Form.Item
        name="usermail"
        rules={[{ required: true, message: 'Please input your usermail!' }]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="user mail" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="/reset-password">
          Forgot password
        </Link>
      </Form.Item>
      {error && <Text type='danger'>email or password is incorect</Text> }
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleLogin}>
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </>
  )
}

export default Login