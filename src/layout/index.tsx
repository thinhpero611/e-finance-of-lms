import React, { useEffect, useState } from 'react';
import { Divider, Layout, Badge, Menu, Space, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Title from 'antd/lib/typography/Title';
import { BookOutlined, SettingOutlined, ShopOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Text from 'antd/lib/typography/Text';
import { Link, Route } from 'react-router-dom';
import Home from '../view/Home';

const { Header, Footer, Content, Sider } = Layout;

interface IProps {
    children: string | React.ReactNode
}

const MainLayout: React.FC<IProps> = (props) => {
  return (
    <Layout style={{ height: '100vh'}}>
      <Header>
        <Row justify="center" align="middle">
        <Col span="8">
            <Title level={5} style={{ color: 'white' }}>Home</Title>
        </Col>
        <Col span="16">
          <Title level={5} style={{ color: 'white'}}>Course <Text type='warning'>Hub</Text> </Title>
        </Col>
        </Row>
      </Header>
    <Layout>
      <Sider
        theme='light'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu mode="inline">
          <Menu.Item key="1" icon={<BookOutlined />}>
              <Link to="/course">
            Your course
              </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
              <Link to="/market">
            Market Explore
              </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/account">
            Account
              </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
              <Link to="/setting">
            Setting
              </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ margin: '24px 16px 0' }}>
        {props.children}
      </Content>
    </Layout>
      <Footer style={{ textAlign: 'center' }}>D e s i g n _ b y _ m e _ 2022 </Footer>
  </Layout>
  )
}

export default MainLayout