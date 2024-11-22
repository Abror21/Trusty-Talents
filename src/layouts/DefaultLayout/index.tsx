import React from 'react';
import { StyledDefaultLayout } from './style';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';

const { Content } = Layout;

const DefaultLayout = () => {
  return (
    <StyledDefaultLayout>
      <Layout className="layout">
        <Header />
        <Content>
          <>
            <Outlet />
          </>
        </Content>
        <Footer />
      </Layout>
    </StyledDefaultLayout>
  );
};

export default DefaultLayout;
