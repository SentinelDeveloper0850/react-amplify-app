import { Layout } from 'antd';
import ActionBar from '../components/actionBar';
import Header from '../components/header';
import NavBar from '../components/navbar';

interface Props {
  children: any;
  pageTitle: string;
  actions: any;
}

const MainLayout = ({ children, pageTitle, actions }: Props) => {
  const Content = Layout.Content;
  return (
    <div className='main-layout'>
      <Layout>
        <Header username='Given Somdaka' />
        <NavBar />
        <ActionBar title={pageTitle} actions={actions} />
        <Layout>
          <Content>
            <div className='content-body'>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
