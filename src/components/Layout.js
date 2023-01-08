import { Layout } from 'antd';
import React from 'react';
// import ApiData from './ApiData.js';
import MenuBar from './MenuBar.js';
import FetchData from './GetData.js';
import FetchMenuData from './menu/FetchMenuData.js';
// import DataFetching from './useEffect.js';
// import FetchingSingle from './EffectGetSingle.js';
// import ObjectApiData from './ObjectDataApi.js';

const { Header, Content, Footer } = Layout;

const MyLayOut = (React.FC = function () {
  return (
    <Layout className="layout">
      <section className="ant-layout layout css-dev-only-do-not-override-k83k30">
        <Header>
          <MenuBar />
        </Header>
        <Content style={{ padding: '0px 0px' }}>
          <div
            className="site-layout-content"
            style={{ background: 'white' }}
          />
          <br/>
        <br/>
        <FetchData />
        <br/>
        <FetchMenuData />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Furniture Shop ©2023 Created by MasudRana
        </Footer>
      </section>
    </Layout>
  );
});

export default MyLayOut;