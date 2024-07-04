import React from "react";
import { MainLayout } from "../components";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";


const { Content } = Layout;

const MainOutlet = () => {
  return (
    <>
      <Layout>
        <MainLayout/>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default MainOutlet;
