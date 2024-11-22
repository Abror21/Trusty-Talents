import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

import { StyledPage } from './style';
import PageContent from './PageContent';
import PageLayout from './PageLayout';
import { Footer, Header } from 'components';

const { Content } = Layout;

const UserLayout = () => {
  const location = useLocation();

  return (
    <StyledPage>
      <Layout className="layout">
        {<Header />}
        <Content>
          <>
            <Outlet />
          </>
        </Content>
        {<Footer />}
      </Layout>
    </StyledPage>
  );
};

UserLayout.PageLayout = PageLayout;
UserLayout.PageContent = PageContent;

export default UserLayout;
