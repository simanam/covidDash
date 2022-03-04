import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Avatar, PageHeader } from "antd";
import Navbar from "./components/Navbar";
import { Homepage, CountryStats, Symptoms, Location } from "./pages";
import "./App.css";
import "leaflet/dist/leaflet.css";
const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        className="c-sidebar"
        theme="light"
        width={250}
        style={{
          backgroundColor: "#f8f8fa;",
        }}
      >
        <Navbar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader className="site-page-header" title="Covid Dash" />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 0",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/countries" element={<CountryStats />} />
              <Route path="/symptoms" element={<Symptoms />} />
              <Route path="/currentlocation" element={<Location />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Covid Dash ©2022 Created by 3pencomic
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
