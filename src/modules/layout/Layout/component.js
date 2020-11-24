import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.dark.css';

const { Content, Footer, Sider } = Layout;

export const Component = withAuthenticationRequired(({ children }) => {
  const { isLoading, user } = useAuth0();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
          <Menu.Item key="1">Post-matching</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 50px' }}>{children}</Content>
        <Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Inside Oliva</p>
          <p>Logged in as {isLoading ? '...' : user.given_name}</p>
        </Footer>
      </Layout>
    </Layout>
  );
});

Component.displayName = 'Layout';
