import React from "react";
import { Layout } from "antd";
import Header from "./navigation/Header";
import SideBar from "./navigation/SideBar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Layout>
        <SideBar />
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default MainLayout;
